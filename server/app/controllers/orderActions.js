/* eslint-disable object-shorthand */
// Import access to database tables
const tables = require("../../database/tables");

// Fonction pour générer un numéro de commande unique
const generateOrderNumber = () => {
  const prefix = "ORD";
  const randomNumber = Math.floor(Math.random() * Date.now());
  return prefix + randomNumber;
};

async function validateCartAndCreateOrder(req, res) {
    const { userId } = req.params;

    try {
        // 1. Récupérer les articles du panier de l'utilisateur
        const cartItems = await tables.cart.readCart(userId);

        if (cartItems.length === 0) {
            return res.status(400).json({ message: 'Votre panier est vide.' });
        }

        // 2. Générer un numéro de commande unique avec la fonction personnalisée
        const orderNumber = generateOrderNumber();

        // 3. Appliquer .map() pour ajouter le numéro de commande à chaque article du panier
        const updatedCartItems = cartItems.map(item => ({
            ...item,
            orderNumber: orderNumber  // Ajoute le numéro de commande à chaque article
        }));

        // 4. Boucler sur chaque article et créer une commande pour chacun dans la table "order"
        await Promise.all(updatedCartItems.map(async (item) => {
            const totalAmount = parseFloat(item.price_ht) * (1 + parseFloat(item.tva) / 100);  // Le montant TTC pour chaque article

            await tables.order.createOrder({
                user_id: userId,
                order_total_amount: totalAmount,  // Utiliser le montant total pour chaque workshop
                order_number: item.orderNumber,  // Le numéro de commande généré
                order_date: new Date(),
                workshop_id: item.id  // L'ID du workshop
            });
        }));

        // 5. Vider le panier (supprimer les articles de la table "cart")
        await tables.cart.deleteCart(userId);

        // Retourner la réponse avec le numéro de commande
        return res.status(200).json({
            message: 'Commande validée avec succès.',
            orderNumber: orderNumber  // Retourner le numéro de commande
        });

    } catch (error) {
        console.error('Erreur lors de la validation du panier:', error);
        return res.status(500).json({ message: 'Erreur lors de la validation du panier.' });
    }
}

module.exports = {
    validateCartAndCreateOrder
};