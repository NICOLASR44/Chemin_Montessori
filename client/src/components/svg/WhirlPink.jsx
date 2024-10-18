import PropTypes from "prop-types";

function WhirlPink({ className, height = 95, width = 101, fill = "#ffbaf3" }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 101 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.0232 94.7461C29.2865 95.2424 25.3835 92.8943 14.628 80.3585C12.6603 78.3111 10.7327 76.2206 9.20928 73.8198C7.51616 71.3608 5.59424 69.0089 4.61421 66.1588C3.0965 61.4081 2.07453 56.4768 1.27945 51.5625C0.394759 43.0818 1.30424 34.2345 4.19856 26.2163C6.32068 21.5953 9.58299 17.5213 12.9483 13.7181C15.7091 10.8135 19.389 9.05193 22.7333 6.90121C25.1585 5.35961 27.6658 3.91764 30.3523 2.8592C38.3603 -0.131875 43.3653 -0.349956 51.7318 0.949124C58.5252 1.89664 65.4903 2.75956 71.8242 5.4912C81.4033 9.94116 88.9041 18.6662 92.3438 28.4761C93.3734 32.3188 93.4782 36.3307 93.5545 40.2844C93.688 46.2139 93.2914 52.1866 91.7889 57.9451C90.7593 61.8856 88.477 65.3316 86.2977 68.7344C84.0898 72.2538 81.3289 75.414 78.2154 78.1852C70.3046 85.0039 47.9432 90.6853 38.1792 86.2729C34.2991 84.7294 31.2866 81.8399 27.7745 79.6986C22.1022 75.7393 14.7253 69.2439 11.5316 63.1546C10.0215 59.3382 10.2274 55.0875 9.98911 51.0549C9.99673 44.6948 11.8691 39.3124 15.2134 33.9356C16.6548 31.439 18.0734 28.9198 19.6445 26.5002C21.4596 24.06 23.5627 21.834 25.4998 19.4859C29.6545 15.5323 34.915 11.9302 40.8047 11.3925C54.5632 10.2175 60.9657 12.9097 71.5497 21.2663C75.2143 24.5262 79.6282 27.3011 82.0668 31.6476C87.2148 42.0102 82.3128 54.2603 75.5708 62.7579C69.4237 71.4717 59.019 78.9691 47.7602 76.7019C42.4234 75.9292 37.3402 73.8631 32.5297 71.53C26.4265 68.0933 23.2538 61.4475 21.8257 54.907C20.8609 49.784 21.8524 44.3865 23.3911 39.4609C25.9632 29.5721 33.3172 20.8094 44.5341 21.9036C49.4304 22.3473 54.2371 23.449 58.9733 24.7123C64.6532 25.9268 69.5534 29.8466 71.8357 35.1313C73.0388 37.9814 72.7108 41.1548 72.6326 44.1684C72.4935 49.3309 70.8118 54.3468 67.3817 58.2966C61.8714 64.8353 57.6977 65.7885 49.4209 65.4858C42.6408 65.6719 35.1285 63.79 31.0311 58.0673C28.7202 54.4126 29.8356 49.7389 31.3323 45.9845C33.1246 41.873 33.4888 36.5037 37.6606 33.9224C39.449 33.0031 41.554 33.2814 43.5026 33.1291C49.7717 32.9035 58.6053 34.3116 60.1363 41.4518C61.2803 47.8777 58.0829 55.8414 51.3352 57.8003C42.2232 60.1315 38.4652 54.1606 39.552 45.8999C40.1297 42.6757 43.556 41.1811 46.5952 41.8147C52.38 42.0064 52.6851 48.7669 49.5124 52.2487C47.6381 54.1249 45.7372 51.1715 46.5647 49.3704C46.7801 48.6504 47.2358 48.0356 47.4856 47.3325C46.2272 47.0693 43.2357 46.2026 43.1956 48.1616C43.2147 49.6938 43.2814 51.6396 44.6046 52.6585C47.7811 54.1738 52.2027 54.1851 54.8015 51.5606C56.6319 49.6975 57.2973 47.0524 57.2096 44.5144C57.3755 40.0663 49.3313 39.7128 46.0385 39.2372C43.6685 39.2316 40.9114 38.3574 38.6711 39.1338C36.1467 41.1792 35.8588 47.1069 34.9436 50.2578C34.8768 51.4253 34.486 52.7149 34.9169 53.8335C36.0647 55.5368 37.6682 56.9017 39.3041 58.1368C43.678 61.4362 49.3541 62.6338 54.7805 62.3198C59.1277 61.9833 61.8371 58.3399 64.291 55.2059C67.191 51.7336 67.9842 47.3193 68.1024 42.9427C68.4227 38.959 68.4303 36.4717 65.6752 33.2475C60.3937 25.7914 49.6611 25.2519 41.3995 27.1488C33.4182 29.4368 27.5457 36.8646 25.9765 44.7512C25.6333 47.8871 25.2729 51.1733 26.2949 54.2208C27.4465 58.0748 28.7183 61.9777 31.3495 65.1248C37.632 73.2502 48.929 75.0493 57.9818 70.5148C66.4055 66.4841 74.362 60.0112 77.5042 51.0681C80.9991 42.0309 81.4586 33.8209 73.7633 26.7972C65.7496 19.5968 54.5174 16.7956 43.9011 16.3106C41.4243 16.1771 38.8084 16.1207 36.5661 17.3202C33.9769 18.8336 31.3876 20.3714 28.8975 22.0427C26.1367 24.3119 23.5188 26.9307 21.5168 29.8823C18.592 35.3625 16.5633 41.3748 15.7453 47.5186C15.2858 49.9588 15.1009 52.4367 14.8778 54.9051C14.4259 58.0767 14.2486 61.3742 16.182 64.1397C19.8675 70.8231 25.9403 74.5267 32.871 77.3523C36.6005 79.0481 40.4157 80.5126 44.5722 80.6818C52.9139 81.2571 60.8018 83.3383 68.6039 79.0895C71.3037 77.6926 73.9902 76.1999 76.1142 74.004C77.8855 72.1955 79.8627 70.5712 81.5139 68.6554C83.7943 65.8636 85.6819 62.741 87.2091 59.4904C89.1043 54.452 89.3713 48.97 90.3132 43.7078C92.7384 29.6398 88.9194 26.5604 78.4651 18.1041C74.9454 15.3161 71.9176 11.8907 68.1081 9.48432C60.6168 4.92908 51.6097 4.07556 43.0049 4.86704C36.7778 5.76944 30.1693 6.52332 24.8802 10.1686C20.3785 12.9774 16.2773 16.3557 13.0665 20.5707C10.5859 23.6764 7.59433 26.6393 6.49609 30.5403C5.38069 34.5146 5.31777 38.6657 5.38641 42.7622C5.25485 48.2217 5.6972 53.6455 6.70392 59.0167C9.08344 72.1579 19.4481 83.1897 32.2018 87.2486C37.4546 88.6154 42.8181 89.5836 48.2368 90.0141C53.1389 90.3018 58.182 91.2775 62.9983 89.922C65.8792 89.1569 68.3236 87.4592 70.8842 86.0248C78.8217 81.9546 85.3844 75.6115 90.4581 68.4016C92.3743 65.3636 94.6756 62.5304 96.119 59.2272C96.8568 57.8755 96.2925 54.9691 98.5824 55.1514C102.941 57.1085 96.3401 66.0592 94.9044 68.71C91.5601 74.8219 88.7306 81.744 82.5797 85.6638C79.3517 87.8672 75.5803 89.1193 71.9539 90.5293C69.1835 91.4561 66.5694 92.8304 63.6828 93.4075C57.9017 94.6239 51.9186 94.748 46.0251 94.748L46.0232 94.7461Z"
        fill={fill}
      />
    </svg>
  );
}

WhirlPink.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};
export default WhirlPink;
