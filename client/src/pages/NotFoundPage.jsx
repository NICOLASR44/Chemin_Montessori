import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import nuageImage from "../../public/nuage tristre.webp"; // Assurez-vous que le chemin est correct
import "./styles/NotFoundPage.css";

export default function NotFoundPage() {
  const cloudRef = useRef(null);
  const tear1Ref = useRef(null);
  const tear2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation d'oscillation du nuage
      gsap.to(cloudRef.current, {
        y: 10,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });

      // Animation de chute pour la première larme
      gsap.fromTo(
        tear1Ref.current,
        { y: 0, opacity: 1 },
        {
          y: 50,
          opacity: 0,
          duration: 1.2,
          repeat: -1,
          ease: "power1.in",
        }
      );

      // Animation de chute pour la deuxième larme avec un léger décalage
      gsap.fromTo(
        tear2Ref.current,
        { y: 0, opacity: 1 },
        {
          y: 50,
          opacity: 0,
          duration: 1.5,
          delay: 0.3,
          repeat: -1,
          ease: "power1.in",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="not-found">
      <div className="not-found__content">
        <p className="not-found__title1">404</p>
        <p className="not-found__title2">Page Not Found</p>
        <h1 className="not-found__title3">Oups! Vous semblez perdu</h1>
        <p className="not-found__message">
          La page que vous cherchez n'est pas ici.
        </p>
        <Link to="/" className="not-found__button">
          Retour à l'accueil
        </Link>
      </div>

      {/* Nuage triste */}
      <div className="cloud-container">
        <img
          ref={cloudRef}
          src={nuageImage}
          alt="Nuage triste"
          className="cloud"
        />

        {/* Deux larmes séparées */}
        <div ref={tear1Ref} className="tear" style={{ left: "40%" }} />
        <div ref={tear2Ref} className="tear" style={{ left: "60%" }} />
      </div>
    </div>
  );
}
