/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function ContactPage(props) {
  const { overrides, ...rest } = props;
  const vectorqwwOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <Flex
      gap="10px"
      direction="column"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ContactPage")}
    >
      <View
        width="1512px"
        height="96px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(25,94,116,1)"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Icon
          width="1512px"
          height="96px"
          viewBox={{ minX: 0, minY: 0, width: 1512, height: 96 }}
          paths={[
            {
              d: "M1512 0L0 0L0 96L1512 96L1512 0Z",
              fill: "rgba(25,94,116,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vectoreqh")}
        ></Icon>
        <Icon
          width="16.2578125px"
          height="15.146240234375px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.2578125,
            height: 15.146240234375,
          }}
          paths={[
            {
              d: "M7.20705 0.520425C7.60605 -0.173475 8.65185 -0.173475 9.05085 0.520425L10.1869 2.50162C10.4032 2.87762 10.8464 3.08092 11.2895 3.00712L13.6247 2.61842C14.4426 2.48222 15.0947 3.26143 14.7734 3.99053L13.8557 6.07232C13.6814 6.46732 13.7916 6.92422 14.1286 7.20812L15.9031 8.70462C16.5247 9.22872 16.2927 10.2003 15.4936 10.4156L13.212 11.0303C12.7794 11.147 12.4728 11.5133 12.4497 11.9412L12.3279 14.196C12.2848 14.9857 11.3419 15.4181 10.6678 14.9574L8.7411 13.6422C8.37465 13.3926 7.88325 13.3926 7.5168 13.6422L5.59005 14.9574C4.91595 15.4181 3.97305 14.9857 3.93 14.196L3.8082 11.9412C3.7851 11.5133 3.47849 11.147 3.04589 11.0303L0.764663 10.4156C-0.0342822 10.2003 -0.267167 9.22872 0.354643 8.70462L2.12925 7.20812C2.4663 6.92422 2.57654 6.46732 2.40224 6.07232L1.48454 3.99053C1.16324 3.26143 1.8153 2.48222 2.63325 2.61842L4.96844 3.00712C5.41155 3.08092 5.85465 2.87762 6.07095 2.50162L7.20705 0.520425Z",
              fill: "rgba(20,155,252,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="41.76%"
          bottom="42.47%"
          left="6.89%"
          right="92.03%"
          {...getOverrideProps(overrides, "Vectordej")}
        ></Icon>
        <Icon
          width="98.0478515625px"
          height="14.964599609375px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 98.0478515625,
            height: 14.964599609375,
          }}
          paths={[
            {
              d: "M0 2.4077L0 0.198799L12.1863 0.198799L12.1863 2.4077L7.4655 2.4077L7.4655 14.7443L4.7208 14.7443L4.7208 2.4077L0 2.4077ZM17.8259 14.9574C16.6772 14.9574 15.6849 14.7301 14.8502 14.2755C14.0196 13.8163 13.3812 13.1676 12.9339 12.3295C12.4856 11.4867 12.2619 10.4948 12.2619 9.3537C12.2619 8.2315 12.4856 7.2467 12.9339 6.3991C13.3854 5.5469 14.0175 4.884 14.8281 4.4105C15.6377 3.9323 16.59 3.6932 17.6841 3.6932C18.3897 3.6932 19.0564 3.8021 19.6822 4.0199C20.3133 4.2329 20.8708 4.5644 21.3528 5.0142C21.84 5.464 22.2233 6.0369 22.5015 6.7329C22.7798 7.4242 22.9194 8.2481 22.9194 9.2045L22.9194 9.9929L13.5303 9.9929L13.5303 8.2599L20.3312 8.2599C20.3259 7.7675 20.2146 7.3295 19.9952 6.946C19.7768 6.5577 19.4712 6.2523 19.0785 6.0298C18.691 5.8073 18.2385 5.696 17.7208 5.696C17.1696 5.696 16.6845 5.8238 16.2666 6.0795C15.8498 6.3305 15.5232 6.6619 15.2901 7.0738C15.0612 7.481 14.9446 7.9285 14.9394 8.4162L14.9394 9.929C14.9394 10.5634 15.0612 11.1079 15.3048 11.5625C15.5484 12.0123 15.8886 12.3579 16.3264 12.5994C16.7643 12.8362 17.2757 12.9545 17.8626 12.9545C18.2553 12.9545 18.6113 12.9024 18.9294 12.7983C19.2476 12.6894 19.5237 12.5308 19.7568 12.3224C19.9909 12.1141 20.1674 11.856 20.286 11.5483L22.8071 11.8182C22.6475 12.4526 22.345 13.0066 21.8977 13.4801C21.4546 13.9488 20.8877 14.3134 20.1968 14.5738C19.5059 14.8295 18.7152 14.9574 17.8259 14.9574ZM28.4991 14.9645C27.7736 14.9645 27.1194 14.8414 26.5377 14.5952C25.9613 14.3442 25.5034 13.9749 25.1653 13.4872C24.8325 12.9995 24.6655 12.3982 24.6655 11.6832C24.6655 11.0677 24.7853 10.5587 25.0236 10.1562C25.262 9.7538 25.5885 9.4318 26.0012 9.1903C26.4138 8.9488 26.8779 8.7666 27.3956 8.6434C27.9174 8.5156 28.4571 8.4233 29.0136 8.3665C29.6846 8.3002 30.2295 8.241 30.6463 8.1889C31.0642 8.1321 31.3677 8.0469 31.5567 7.9332C31.7499 7.8148 31.8476 7.6326 31.8476 7.3863L31.8476 7.3437C31.8476 6.8087 31.6806 6.3944 31.3477 6.1008C31.0149 5.8073 30.5351 5.6605 29.9082 5.6605C29.2467 5.6605 28.7228 5.7978 28.3353 6.0724C27.9521 6.347 27.6938 6.6714 27.5594 7.0454L25.0383 6.7045C25.2378 6.0416 25.5654 5.4877 26.0232 5.0426C26.4799 4.5928 27.0396 4.2566 27.7011 4.0341C28.3626 3.8068 29.0934 3.6932 29.8935 3.6932C30.4448 3.6932 30.995 3.7547 31.542 3.8778C32.088 4.0009 32.5878 4.2045 33.0403 4.4886C33.4929 4.768 33.8562 5.1491 34.1292 5.6321C34.4075 6.115 34.5471 6.7187 34.5471 7.4432L34.5471 14.7443L31.9515 14.7443L31.9515 13.2457L31.8623 13.2457C31.6985 13.5488 31.4664 13.8328 31.1682 14.098C30.8753 14.3584 30.5046 14.5691 30.0573 14.7301C29.6153 14.8863 29.0955 14.9645 28.4991 14.9645ZM29.1995 13.0753C29.7423 13.0753 30.2117 12.9735 30.6096 12.7699C31.0076 12.5615 31.3131 12.2869 31.5263 11.946C31.7457 11.6051 31.8549 11.2334 31.8549 10.8309L31.8549 9.5454C31.7698 9.6117 31.626 9.6733 31.4223 9.7301C31.2228 9.7869 30.9992 9.8366 30.7514 9.8792C30.5025 9.9219 30.2568 9.9597 30.0132 9.9929C29.7696 10.026 29.5575 10.0544 29.379 10.0781C28.9758 10.1302 28.6156 10.2154 28.2975 10.3338C27.9793 10.4522 27.7284 10.6179 27.5447 10.8309C27.3609 11.0393 27.2685 11.3092 27.2685 11.6406C27.2685 12.1141 27.4502 12.4716 27.8124 12.7131C28.1757 12.9545 28.6377 13.0753 29.1995 13.0753ZM37.2614 14.7443L37.2614 3.8352L39.8412 3.8352L39.8412 5.6889L39.9756 5.6889C40.214 5.0639 40.6098 4.5762 41.1611 4.2258C41.7134 3.8707 42.3717 3.6932 43.1382 3.6932C43.9131 3.6932 44.5673 3.8731 45.0986 4.2329C45.6362 4.588 46.0142 5.0734 46.2326 5.6889L46.3523 5.6889C46.6053 5.0828 47.0326 4.5999 47.6343 4.24C48.2412 3.8755 48.9594 3.6932 49.79 3.6932C50.8442 3.6932 51.7041 4.0104 52.3698 4.6449C53.0366 5.2793 53.3694 6.205 53.3694 7.4219L53.3694 14.7443L50.6625 14.7443L50.6625 7.8196C50.6625 7.1425 50.4735 6.6477 50.0955 6.3352C49.7175 6.018 49.2555 5.8594 48.7085 5.8594C48.0575 5.8594 47.5472 6.0535 47.1797 6.4417C46.8164 6.8253 46.6358 7.3248 46.6358 7.9403L46.6358 14.7443L43.9877 14.7443L43.9877 7.7131C43.9877 7.1496 43.8092 6.6998 43.4511 6.3636C43.0983 6.0274 42.6353 5.8594 42.0641 5.8594C41.6766 5.8594 41.3228 5.9541 41.0046 6.1434C40.6865 6.3281 40.4334 6.5909 40.2444 6.9318C40.0554 7.268 39.9609 7.661 39.9609 8.1108L39.9609 14.7443L37.2614 14.7443ZM69.8744 7.4716C69.8744 9.0388 69.5657 10.3811 68.9493 11.4986C68.3382 12.6113 67.5024 13.4635 66.444 14.0554C65.3898 14.6472 64.1939 14.9432 62.8572 14.9432C61.5195 14.9432 60.3215 14.6472 59.262 14.0554C58.2089 13.4588 57.3731 12.6041 56.7567 11.4915C56.1456 10.374 55.839 9.0341 55.839 7.4716C55.839 5.9043 56.1456 4.5644 56.7567 3.4517C57.3731 2.3343 58.2089 1.4796 59.262 0.887802C60.3215 0.295902 61.5195 0 62.8572 0C64.1939 0 65.3898 0.295902 66.444 0.887802C67.5024 1.4796 68.3382 2.3343 68.9493 3.4517C69.5657 4.5644 69.8744 5.9043 69.8744 7.4716ZM67.0929 7.4716C67.0929 6.3684 66.9113 5.438 66.548 4.6804C66.1899 3.9181 65.6933 3.3428 65.057 2.9545C64.4207 2.5615 63.6867 2.365 62.8572 2.365C62.0267 2.365 61.2938 2.5615 60.6575 2.9545C60.0212 3.3428 59.5214 3.9181 59.1581 4.6804C58.8 5.438 58.6215 6.3684 58.6215 7.4716C58.6215 8.5748 58.8 9.5076 59.1581 10.2699C59.5214 11.0274 60.0212 11.6027 60.6575 11.9957C61.2938 12.384 62.0267 12.5781 62.8572 12.5781C63.6867 12.5781 64.4207 12.384 65.057 11.9957C65.6933 11.6027 66.1899 11.0274 66.548 10.2699C66.9113 9.5076 67.0929 8.5748 67.0929 7.4716ZM85.0406 0.198799L85.0406 14.7443L82.5794 14.7443L75.3837 4.8366L75.2567 4.8366L75.2567 14.7443L72.4899 14.7443L72.4899 0.198799L74.9658 0.198799L82.1552 10.1136L82.2885 10.1136L82.2885 0.198799L85.0406 0.198799ZM88.0551 14.7443L88.0551 0.198799L97.9892 0.198799L97.9892 2.4077L90.8219 2.4077L90.8219 6.3565L97.4736 6.3565L97.4736 8.5653L90.8219 8.5653L90.8219 12.5355L98.048 12.5355L98.048 14.7443L88.0551 14.7443Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="41.93%"
          bottom="42.48%"
          left="8.25%"
          right="85.27%"
          {...getOverrideProps(overrides, "Vectordum")}
        ></Icon>
        <Icon
          width="52.9990234375px"
          height="12px"
          viewBox={{ minX: 0, minY: 0, width: 52.9990234375, height: 12 }}
          paths={[
            {
              d: "M7.20722 3.0682C7.13582 2.4925 6.84495 2.0455 6.3357 1.7273C5.82645 1.4091 5.20276 1.25 4.4625 1.25C3.92175 1.25 3.44821 1.3334 3.04291 1.5C2.64076 1.6667 2.3268 1.8959 2.1 2.1875C1.8774 2.4792 1.76611 2.8107 1.76611 3.1819C1.76611 3.4925 1.84382 3.7595 1.99817 3.983C2.15777 4.2027 2.36044 4.3864 2.60719 4.5341C2.85394 4.6781 3.11219 4.7974 3.38309 4.8921C3.65294 4.983 3.90181 5.0569 4.12861 5.1137L5.36972 5.4319C5.68787 5.5114 6.04171 5.6213 6.43126 5.7614C6.82501 5.9016 7.20088 6.0928 7.55893 6.3353C7.92118 6.5739 8.21944 6.8807 8.45359 7.2557C8.68879 7.6307 8.80529 8.091 8.80529 8.6364C8.80529 9.2652 8.63314 9.8334 8.28664 10.341C7.94434 10.8485 7.44348 11.2519 6.78303 11.5512C6.12678 11.8504 5.32981 12 4.39111 12C3.51646 12 2.75838 11.8656 2.11788 11.5966C1.48158 11.3277 0.980724 10.9527 0.614274 10.4716C0.253073 9.9906 0.0483001 9.4319 0 8.7955L1.52777 8.7955C1.56767 9.2349 1.72201 9.5985 1.99291 9.8864C2.26696 10.1705 2.61344 10.3826 3.03029 10.5228C3.45239 10.6591 3.90601 10.7273 4.39111 10.7273C4.95601 10.7273 5.46314 10.6402 5.91254 10.466C6.36194 10.2879 6.71792 10.0417 6.98042 9.7273C7.24292 9.4091 7.37417 9.0379 7.37417 8.6137C7.37417 8.2273 7.26073 7.9129 7.03393 7.6705C6.80713 7.4281 6.50894 7.2311 6.13934 7.0796C5.76869 6.9281 5.36972 6.7955 4.94027 6.6819L3.43666 6.2728C2.48221 6.0114 1.72622 5.6383 1.16972 5.1535C0.612165 4.6686 0.333893 4.0341 0.333893 3.25C0.333893 2.5985 0.518685 2.0303 0.889335 1.5455C1.26314 1.0569 1.76399 0.678103 2.39294 0.409103C3.02504 0.136403 3.73068 0 4.51083 0C5.29833 0 5.99763 0.134503 6.61083 0.403503C7.22298 0.668603 7.70807 1.0322 8.06612 1.4944C8.42837 1.9565 8.6184 2.4811 8.63835 3.0682L7.20722 3.0682ZM14.889 11.9773C14.007 11.9773 13.2447 11.7917 12.6042 11.4205C11.9679 11.0455 11.4765 10.5228 11.1311 9.8523C10.7888 9.1781 10.6176 8.394 10.6176 7.5C10.6176 6.6061 10.7888 5.8182 11.1311 5.1364C11.4765 4.4508 11.9585 3.9167 12.5748 3.5341C13.1954 3.1478 13.9188 2.9546 14.7462 2.9546C15.224 2.9546 15.6954 3.0303 16.1606 3.1819C16.6257 3.3334 17.0489 3.5796 17.4311 3.9205C17.8133 4.2576 18.1168 4.7046 18.3436 5.2614C18.5704 5.8182 18.6837 6.5038 18.6837 7.3182L18.6837 7.8864L11.6204 7.8864L11.6204 6.7273L17.2515 6.7273C17.2515 6.2349 17.1486 5.7955 16.9418 5.4091C16.7391 5.0228 16.4483 4.7178 16.0703 4.4944C15.6965 4.2709 15.2555 4.1591 14.7462 4.1591C14.1855 4.1591 13.7004 4.2917 13.2909 4.5569C12.8846 4.8182 12.5727 5.1591 12.3543 5.5796C12.1349 6 12.0257 6.4508 12.0257 6.9319L12.0257 7.7046C12.0257 8.3637 12.1454 8.9224 12.3837 9.3807C12.6263 9.8353 12.9623 10.1819 13.3917 10.4205C13.8212 10.6553 14.321 10.7728 14.889 10.7728C15.2597 10.7728 15.5936 10.7235 15.8918 10.625C16.1942 10.5228 16.4546 10.3713 16.673 10.1705C16.8924 9.966 17.0615 9.7122 17.1801 9.4091L18.5409 9.7728C18.3971 10.2122 18.1567 10.5985 17.8186 10.9319C17.4805 11.2614 17.0635 11.519 16.5658 11.7046C16.0692 11.8864 15.5096 11.9773 14.889 11.9773ZM23.5221 12C22.9415 12 22.4144 11.8959 21.9408 11.6875C21.4683 11.4754 21.0924 11.1705 20.8142 10.7728C20.5349 10.3713 20.3963 9.8864 20.3963 9.3182C20.3963 8.8182 20.4992 8.4129 20.7061 8.1023C20.9129 7.7879 21.189 7.5417 21.5355 7.3637C21.882 7.1857 22.2632 7.0531 22.6811 6.966C23.1021 6.875 23.5263 6.8031 23.9515 6.75C24.508 6.6819 24.9596 6.6307 25.3061 6.5966C25.6557 6.5588 25.9109 6.4963 26.0694 6.4091C26.2332 6.322 26.3141 6.1705 26.3141 5.9546L26.3141 5.9091C26.3141 5.3485 26.1534 4.9129 25.8311 4.6023C25.5129 4.2917 25.03 4.1364 24.3811 4.1364C23.7091 4.1364 23.182 4.2766 22.8008 4.5569C22.4186 4.8372 22.1498 5.1364 21.9954 5.4546L20.6588 5C20.8971 4.4697 21.2153 4.0569 21.6132 3.7614C22.0143 3.4622 22.4522 3.2538 22.9257 3.1364C23.4024 3.0152 23.8718 2.9546 24.3338 2.9546C24.6278 2.9546 24.9659 2.9887 25.3481 3.0569C25.7334 3.1213 26.1051 3.2557 26.4632 3.4603C26.8254 3.6648 27.1257 3.9735 27.3641 4.3864C27.6024 4.7993 27.7221 5.3523 27.7221 6.0455L27.7221 11.7955L26.3141 11.7955L26.3141 10.6137L26.2427 10.6137C26.1471 10.8031 25.9886 11.0057 25.765 11.2216C25.5424 11.4375 25.2462 11.6213 24.8766 11.7728C24.507 11.9243 24.0555 12 23.5221 12ZM23.7374 10.7955C24.2939 10.7955 24.7632 10.6913 25.1454 10.483C25.5308 10.2747 25.8206 10.0057 26.0159 9.6762C26.2143 9.3466 26.3141 9 26.3141 8.6364L26.3141 7.4091C26.2542 7.4773 26.123 7.5398 25.9203 7.5966C25.7219 7.6497 25.4909 7.697 25.2284 7.7387C24.9701 7.7766 24.717 7.8107 24.4703 7.841C24.2277 7.8675 24.0314 7.8902 23.8802 7.9091C23.5148 7.9546 23.1725 8.0285 22.8543 8.1307C22.5393 8.2292 22.2852 8.3788 22.09 8.5796C21.8999 8.7766 21.8043 9.0455 21.8043 9.3864C21.8043 9.8523 21.9849 10.2046 22.3472 10.4432C22.7126 10.6781 23.1767 10.7955 23.7374 10.7955ZM30.2925 11.7955L30.2925 3.0682L31.6523 3.0682L31.6523 4.3864L31.7479 4.3864C31.9148 3.9546 32.2172 3.6042 32.655 3.3353C33.0918 3.0663 33.5854 2.9319 34.1345 2.9319C34.2374 2.9319 34.3665 2.9338 34.5219 2.9375C34.6773 2.9413 34.7939 2.947 34.8737 2.9546L34.8737 4.3182C34.8265 4.3069 34.7172 4.2898 34.5461 4.2671C34.3791 4.2406 34.2017 4.2273 34.0148 4.2273C33.5696 4.2273 33.1717 4.3163 32.822 4.4944C32.4755 4.6686 32.2014 4.911 31.9988 5.2216C31.7993 5.5285 31.6995 5.8788 31.6995 6.2728L31.6995 11.7955L30.2925 11.7955ZM39.9862 11.9773C39.1273 11.9773 38.388 11.7841 37.7675 11.3978C37.1469 11.0114 36.6692 10.4792 36.3353 9.8012C36.0014 9.1232 35.8344 8.3485 35.8344 7.4773C35.8344 6.591 36.0056 5.8088 36.3479 5.1307C36.6933 4.4489 37.1742 3.9167 37.7916 3.5341C38.4111 3.1478 39.1356 2.9546 39.963 2.9546C40.6067 2.9546 41.1873 3.0682 41.705 3.2955C42.2216 3.5228 42.6458 3.841 42.9755 4.25C43.3052 4.6591 43.511 5.1364 43.5897 5.6819L42.1817 5.6819C42.0746 5.2841 41.8363 4.9319 41.4666 4.625C41.1002 4.3144 40.6067 4.1591 39.9862 4.1591C39.4381 4.1591 38.9561 4.2955 38.5424 4.5682C38.1329 4.8372 37.8127 5.2178 37.5827 5.7103C37.3559 6.1989 37.2425 6.7728 37.2425 7.4319C37.2425 8.1061 37.3538 8.6932 37.5764 9.1932C37.8032 9.6932 38.1213 10.0815 38.5308 10.358C38.9445 10.6345 39.4297 10.7728 39.9862 10.7728C40.3526 10.7728 40.6844 10.7122 40.9826 10.591C41.2808 10.4697 41.5338 10.2955 41.7407 10.0682C41.9475 9.841 42.0945 9.5682 42.1817 9.25L43.5897 9.25C43.511 9.7652 43.3136 10.2292 42.9997 10.6421C42.6889 11.0512 42.2772 11.3769 41.7648 11.6194C41.2556 11.858 40.6624 11.9773 39.9862 11.9773ZM47.0558 6.5455L47.0558 11.7955L45.6488 11.7955L45.6488 0.159103L47.0558 0.159103L47.0558 4.4319L47.1755 4.4319C47.3908 3.9811 47.712 3.6232 48.1425 3.358C48.5751 3.0891 49.1527 2.9546 49.8719 2.9546C50.4967 2.9546 51.0437 3.0739 51.5131 3.3125C51.9824 3.5474 52.3457 3.9091 52.605 4.3978C52.8675 4.8826 52.9988 5.5 52.9988 6.25L52.9988 11.7955L51.5908 11.7955L51.5908 6.341C51.5908 5.6478 51.4017 5.1118 51.0238 4.733C50.6499 4.3504 50.1302 4.1591 49.4666 4.1591C49.0046 4.1591 48.592 4.2519 48.2255 4.4375C47.8633 4.6232 47.5777 4.894 47.3666 5.25C47.1598 5.6061 47.0558 6.0379 47.0558 6.5455Z",
              fill: "rgba(128,128,128,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="43.96%"
          bottom="43.54%"
          left="64.02%"
          right="32.47%"
          {...getOverrideProps(overrides, "Vectorrui")}
        ></Icon>
        <Icon
          width="12.2431640625px"
          height="11.659912109375px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 12.2431640625,
            height: 11.659912109375,
          }}
          paths={[
            {
              d: "M8.74637 7.3333L8.20048 7.3333L8.00092 7.1533C8.68341 6.3933 9.10346 5.4067 9.10346 4.3333C9.10346 1.94 7.06639 0 4.54641 0C2.03693 0 0 1.94 0 4.3333C0 6.7267 2.03693 8.6667 4.54641 8.6667C5.6804 8.6667 6.70946 8.2733 7.50745 7.62L7.69638 7.8067L7.69638 8.3333L11.2034 11.66L12.2429 10.6667L8.74637 7.3333ZM4.54641 7.3333C2.80343 7.3333 1.39644 5.9933 1.39644 4.3333C1.39644 2.6733 2.80343 1.3333 4.54641 1.3333C6.28939 1.3333 7.69638 2.6733 7.69638 4.3333C7.69638 5.9933 6.28939 7.3333 4.54641 7.3333Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="43.75%"
          bottom="44.1%"
          left="81.88%"
          right="17.32%"
          {...getOverrideProps(overrides, "Vectorsyk")}
        ></Icon>
        <Icon
          width="52.5px"
          height="42px"
          viewBox={{ minX: 0, minY: 0, width: 52.5, height: 42 }}
          paths={[
            {
              d: "M1.05 1L1.05 0L0 0L0 1L1.05 1ZM1.05 41L0 41L0 42L1.05 42L1.05 41ZM1.05 2L47.25 2L47.25 0L1.05 0L1.05 2ZM50.4 5L50.4 37L52.5 37L52.5 5L50.4 5ZM47.25 40L1.05 40L1.05 42L47.25 42L47.25 40ZM2.1 41L2.1 1L0 1L0 41L2.1 41ZM50.4 37C50.4 38.6569 48.993 40 47.25 40L47.25 42C50.148 42 52.5 39.7614 52.5 37L50.4 37ZM47.25 2C48.993 2 50.4 3.3431 50.4 5L52.5 5C52.5 2.2386 50.148 0 47.25 0L47.25 2Z",
              fill: "rgba(174,179,183,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="28.13%"
          bottom="28.13%"
          left="80.56%"
          right="15.97%"
          {...getOverrideProps(overrides, "Vectorizi")}
        ></Icon>
        <Icon
          width="316.0498046875px"
          height="41px"
          viewBox={{ minX: 0, minY: 0, width: 316.0498046875, height: 41 }}
          paths={[
            {
              d: "M4.725 0.5L311.325 0.5L311.325 -0.5L4.725 -0.5L4.725 0.5ZM311.325 0.5C313.682 0.5 315.55 2.31357 315.55 4.5L316.55 4.5C316.55 1.71587 314.187 -0.5 311.325 -0.5L311.325 0.5ZM315.55 4.5L315.55 36.5L316.55 36.5L316.55 4.5L315.55 4.5ZM315.55 36.5C315.55 38.6864 313.682 40.5 311.325 40.5L311.325 41.5C314.187 41.5 316.55 39.2841 316.55 36.5L315.55 36.5ZM311.325 40.5L4.725 40.5L4.725 41.5L311.325 41.5L311.325 40.5ZM4.725 40.5C2.36833 40.5 0.5 38.6864 0.5 36.5L-0.5 36.5C-0.5 39.2841 1.86258 41.5 4.725 41.5L4.725 40.5ZM0.5 36.5L0.5 4.5L-0.5 4.5L-0.5 36.5L0.5 36.5ZM0.5 4.5C0.5 2.31357 2.36833 0.5 4.725 0.5L4.725 -0.5C1.86258 -0.5 -0.5 1.71587 -0.5 4.5L0.5 4.5Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          position="absolute"
          top="28.65%"
          bottom="28.65%"
          left="63.09%"
          right="16.01%"
          {...getOverrideProps(overrides, "Vectorhru")}
        ></Icon>
        <Icon
          width="16.7998046875px"
          height="19.5px"
          viewBox={{ minX: 0, minY: 0, width: 16.7998046875, height: 19.5 }}
          paths={[
            {
              d: "M8.40002 19.5C9.55503 19.5 10.5 18.6 10.5 17.5L6.30002 17.5C6.30002 18.6 7.24502 19.5 8.40002 19.5ZM14.7 13.5L14.7 8.5C14.7 5.43 12.9885 2.86 9.97503 2.18L9.97503 1.5C9.97503 0.67 9.27153 0 8.40002 0C7.52852 0 6.82502 0.67 6.82502 1.5L6.82502 2.18C3.82201 2.86 2.10001 5.42 2.10001 8.5L2.10001 13.5L0 15.5L0 16.5L16.8 16.5L16.8 15.5L14.7 13.5ZM12.6 14.5L4.20001 14.5L4.20001 8.5C4.20001 6.02 5.78552 4 8.40002 4C11.0145 4 12.6 6.02 12.6 8.5L12.6 14.5Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="40.1%"
          bottom="39.58%"
          left="86.46%"
          right="12.43%"
          {...getOverrideProps(overrides, "Vectorkqs")}
        ></Icon>
        <Icon
          width="3.12%"
          height="46.88%"
          viewBox={{ minX: 0, minY: 0, width: 47.25, height: 45 }}
          paths={[
            {
              d: "M47.25 22.5C47.25 10.0736 36.6727 0 23.625 0C10.5773 0 0 10.0736 0 22.5C0 34.9264 10.5773 45 23.625 45C36.6727 45 47.25 34.9264 47.25 22.5Z",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="26.56%"
          bottom="26.56%"
          left="90.07%"
          right="6.81%"
          {...getOverrideProps(overrides, "Vectorvtx")}
        ></Icon>
        <View
          width="146px"
          height="88px"
          position="absolute"
          top="0px"
          left="601px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 426")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 425")}
          >
            <Icon
              width="45.01171875px"
              height="11.818115234375px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 45.01171875,
                height: 11.818115234375,
              }}
              paths={[
                {
                  d: "M0 11.6364L0 0L1.47945 0L1.47945 5.1819L7.99471 5.1819L7.99471 0L9.47416 0L9.47416 11.6364L7.99471 11.6364L7.99471 6.4319L1.47945 6.4319L1.47945 11.6364L0 11.6364ZM16.1353 11.8182C15.309 11.8182 14.5824 11.6307 13.9587 11.2557C13.3381 10.8807 12.853 10.3561 12.5023 9.6819C12.1569 9.0076 11.9837 8.2197 11.9837 7.3182C11.9837 6.4091 12.1569 5.6156 12.5023 4.9375C12.853 4.2595 13.3381 3.733 13.9587 3.358C14.5824 2.983 15.309 2.7955 16.1353 2.7955C16.9627 2.7955 17.6872 2.983 18.3078 3.358C18.9315 3.733 19.4166 4.2595 19.7631 4.9375C20.1128 5.6156 20.2881 6.4091 20.2881 7.3182C20.2881 8.2197 20.1128 9.0076 19.7631 9.6819C19.4166 10.3561 18.9315 10.8807 18.3078 11.2557C17.6872 11.6307 16.9627 11.8182 16.1353 11.8182ZM16.1353 10.6137C16.7643 10.6137 17.2809 10.4603 17.6873 10.1534C18.0926 9.8466 18.3928 9.4432 18.5881 8.9432C18.7824 8.4432 18.8801 7.9016 18.8801 7.3182C18.8801 6.7349 18.7824 6.1913 18.5881 5.6875C18.3928 5.1837 18.0926 4.7766 17.6873 4.4659C17.2809 4.1553 16.7643 4 16.1353 4C15.5074 4 14.9909 4.1553 14.5845 4.4659C14.1792 4.7766 13.8789 5.1837 13.6836 5.6875C13.4893 6.1913 13.3917 6.7349 13.3917 7.3182C13.3917 7.9016 13.4893 8.4432 13.6836 8.9432C13.8789 9.4432 14.1792 9.8466 14.5845 10.1534C14.9909 10.4603 15.5074 10.6137 16.1353 10.6137ZM22.6054 11.6364L22.6054 2.9091L23.9652 2.9091L23.9652 4.2728L24.0849 4.2728C24.276 3.8069 24.5837 3.4451 25.01 3.1875C25.4352 2.9262 25.9465 2.7955 26.5429 2.7955C27.1477 2.7955 27.6507 2.9262 28.0518 3.1875C28.4581 3.4451 28.7742 3.8069 29.001 4.2728L29.0965 4.2728C29.3307 3.822 29.6824 3.4641 30.1518 3.1989C30.6211 2.93 31.1839 2.7955 31.8402 2.7955C32.6602 2.7955 33.3301 3.0398 33.8509 3.5284C34.3717 4.0133 34.6322 4.769 34.6322 5.7955L34.6322 11.6364L33.2251 11.6364L33.2251 5.7955C33.2251 5.1516 33.0393 4.6913 32.6697 4.4148C32.3001 4.1383 31.8643 4 31.3635 4C30.7188 4 30.2201 4.1856 29.8662 4.5569C29.5124 4.9243 29.3349 5.3902 29.3349 5.9546L29.3349 11.6364L27.9027 11.6364L27.9027 5.6591C27.9027 5.1629 27.7336 4.7633 27.3955 4.4603C27.0574 4.1534 26.6227 4 26.0893 4C25.7239 4 25.3816 4.0928 25.0635 4.2784C24.7495 4.4641 24.4944 4.7216 24.3001 5.0512C24.109 5.3769 24.0135 5.7538 24.0135 6.1819L24.0135 11.6364L22.6054 11.6364ZM41.2167 11.8182C40.3337 11.8182 39.5724 11.6326 38.9319 11.2614C38.2956 10.8864 37.8042 10.3637 37.4587 9.6932C37.1164 9.019 36.9453 8.2349 36.9453 7.3409C36.9453 6.447 37.1164 5.6591 37.4587 4.9773C37.8042 4.2917 38.2861 3.7576 38.9025 3.375C39.523 2.9887 40.2465 2.7955 41.0739 2.7955C41.5506 2.7955 42.022 2.8712 42.4872 3.0228C42.9534 3.1743 43.3765 3.4205 43.7587 3.7614C44.1399 4.0985 44.4444 4.5455 44.6712 5.1023C44.898 5.6591 45.0114 6.3447 45.0114 7.1591L45.0114 7.7273L37.948 7.7273L37.948 6.5682L43.5792 6.5682C43.5792 6.0758 43.4763 5.6364 43.2694 5.25C43.0668 4.8637 42.776 4.5587 42.398 4.3353C42.0242 4.1118 41.5831 4 41.0739 4C40.5132 4 40.0281 4.1326 39.6186 4.3978C39.2122 4.6591 38.9004 5 38.6809 5.4205C38.4625 5.8409 38.3533 6.2917 38.3533 6.7728L38.3533 7.5455C38.3533 8.2046 38.473 8.7633 38.7114 9.2216C38.9539 9.6762 39.2899 10.0228 39.7194 10.2614C40.1488 10.4962 40.6487 10.6137 41.2167 10.6137C41.5874 10.6137 41.9212 10.5644 42.2194 10.4659C42.5218 10.3637 42.7822 10.2122 43.0006 10.0114C43.219 9.8069 43.388 9.5531 43.5077 9.25L44.8686 9.6137C44.7247 10.0531 44.4843 10.4394 44.1462 10.7728C43.8081 11.1023 43.3902 11.3599 42.8935 11.5455C42.3958 11.7273 41.8373 11.8182 41.2167 11.8182Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="49.28%"
              bottom="37.29%"
              left="38.14%"
              right="31.03%"
              {...getOverrideProps(overrides, "Vectoredc")}
            ></Icon>
          </View>
        </View>
        <View
          width="160px"
          height="70px"
          position="absolute"
          top="26px"
          left="756px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 427")}
        >
          <Icon
            width="88.271484375px"
            height="14.619140625px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 88.271484375,
              height: 14.619140625,
            }}
            paths={[
              {
                d: "M0 11.3514L0 0.343948L4.12861 0.343948C5.08306 0.343948 5.86637 0.49085 6.47957 0.784661C7.09172 1.07497 7.54531 1.47445 7.83931 1.98327C8.13331 2.49209 8.28029 3.07073 8.28029 3.71927C8.28029 4.36781 8.13331 4.94295 7.83931 5.44458C7.54531 5.94622 7.09383 6.34039 6.48483 6.62701C5.87688 6.91004 5.09882 7.05155 4.15277 7.05155L0.811661 7.05155L0.811661 5.84765L4.10445 5.84765C4.7565 5.84765 5.2815 5.76166 5.67945 5.58969C6.0816 5.41772 6.37142 5.17404 6.55097 4.85876C6.73367 4.53978 6.825 4.15999 6.825 3.71927C6.825 3.27856 6.73367 2.89337 6.55097 2.5637C6.36722 2.23404 6.07532 1.97968 5.67317 1.80051C5.27207 1.61776 4.74074 1.52638 4.08029 1.52638L1.47945 1.52638L1.47945 11.3514L0 11.3514ZM5.75084 6.40661L8.75806 11.3514L7.04027 11.3514L4.08029 6.40661L5.75084 6.40661ZM14.4669 11.5233C13.5839 11.5233 12.8226 11.3478 12.1821 10.9966C11.5458 10.6419 11.0544 10.1474 10.7079 9.51319C10.3667 8.87543 10.1955 8.13372 10.1955 7.28804C10.1955 6.44246 10.3667 5.69715 10.7079 5.0522C11.0544 4.40366 11.5353 3.89843 12.1517 3.53652C12.7722 3.1711 13.4967 2.98834 14.3241 2.98834C14.8008 2.98834 15.2722 3.05994 15.7374 3.20335C16.2025 3.34666 16.6268 3.57955 17.0079 3.90203C17.3901 4.22091 17.6946 4.64374 17.9214 5.17045C18.1482 5.69715 18.2616 6.34569 18.2616 7.11607L18.2616 7.65356L11.1972 7.65356L11.1972 6.55711L16.8294 6.55711C16.8294 6.09133 16.7265 5.67568 16.5197 5.31016C16.316 4.94475 16.0262 4.65623 15.6482 4.4449C15.2744 4.23349 14.8323 4.12773 14.3241 4.12773C13.7634 4.12773 13.2773 4.25316 12.8678 4.50403C12.4625 4.7512 12.1506 5.07368 11.9311 5.47145C11.7127 5.86912 11.6036 6.29555 11.6036 6.75065L11.6036 7.48158C11.6036 8.10505 11.7222 8.63356 11.9616 9.06708C12.2042 9.49711 12.5401 9.82497 12.9696 10.0507C13.399 10.2728 13.8978 10.3839 14.4669 10.3839C14.8365 10.3839 15.1704 10.3373 15.4697 10.2441C15.771 10.1474 16.0324 10.0041 16.2508 9.81419C16.4692 9.62074 16.6383 9.38066 16.758 9.09395L18.1178 9.43799C17.975 9.85363 17.7345 10.2191 17.3964 10.5344C17.0583 10.8461 16.6404 11.0898 16.1438 11.2654C15.6461 11.4373 15.0875 11.5233 14.4669 11.5233ZM24.2939 11.5233C23.435 11.5233 22.6947 11.3406 22.0742 10.9751C21.4536 10.6096 20.9769 10.1062 20.643 9.46485C20.308 8.8235 20.1411 8.09068 20.1411 7.26657C20.1411 6.42818 20.3123 5.68826 20.6546 5.04681C21 4.40187 21.482 3.89843 22.0983 3.53652C22.7189 3.1711 23.4423 2.98834 24.2697 2.98834C24.9144 2.98834 25.4951 3.0958 26.0117 3.31081C26.5293 3.52582 26.9525 3.82682 27.2822 4.21372C27.6129 4.6007 27.8177 5.0522 27.8975 5.56822L26.4894 5.56822C26.3813 5.19192 26.1429 4.85876 25.7733 4.56844C25.4069 4.27463 24.9144 4.12773 24.2939 4.12773C23.7447 4.12773 23.2638 4.25676 22.8501 4.51472C22.4406 4.76918 22.1203 5.1292 21.8893 5.59508C21.6625 6.05727 21.5492 6.60015 21.5492 7.22362C21.5492 7.86138 21.6605 8.41675 21.8831 8.88972C22.1099 9.36269 22.428 9.73 22.8375 9.99156C23.2512 10.2531 23.7374 10.3839 24.2939 10.3839C24.6593 10.3839 24.9921 10.3266 25.2903 10.212C25.5885 10.0972 25.8405 9.93244 26.0474 9.71742C26.2542 9.5025 26.4012 9.24444 26.4894 8.94345L27.8975 8.94345C27.8177 9.4308 27.6202 9.86972 27.3063 10.2603C26.9965 10.6473 26.585 10.9554 26.0715 11.1848C25.5623 11.4105 24.9701 11.5233 24.2939 11.5233ZM33.8457 11.5233C33.0183 11.5233 32.2927 11.346 31.668 10.9912C31.0485 10.6365 30.5623 10.1403 30.2127 9.5025C29.8672 8.86465 29.694 8.11934 29.694 7.26657C29.694 6.40661 29.8672 5.656 30.2127 5.01456C30.5623 4.3732 31.0485 3.87516 31.668 3.52043C32.2927 3.1657 33.0183 2.98834 33.8457 2.98834C34.6731 2.98834 35.3976 3.1657 36.0181 3.52043C36.6418 3.87516 37.127 4.3732 37.4735 5.01456C37.8231 5.656 37.9985 6.40661 37.9985 7.26657C37.9985 8.11934 37.8231 8.86465 37.4735 9.5025C37.127 10.1403 36.6418 10.6365 36.0181 10.9912C35.3976 11.346 34.6731 11.5233 33.8457 11.5233ZM33.8457 10.3839C34.4747 10.3839 34.9912 10.2388 35.3976 9.94851C35.8029 9.6583 36.1032 9.2767 36.2985 8.80373C36.4928 8.33076 36.5904 7.81843 36.5904 7.26657C36.5904 6.7148 36.4928 6.20058 36.2985 5.72402C36.1032 5.24745 35.8029 4.86235 35.3976 4.56844C34.9912 4.27463 34.4747 4.12773 33.8457 4.12773C33.2178 4.12773 32.7002 4.27463 32.2949 4.56844C31.8896 4.86235 31.5892 5.24745 31.3939 5.72402C31.1997 6.20058 31.1021 6.7148 31.1021 7.26657C31.1021 7.81843 31.1997 8.33076 31.3939 8.80373C31.5892 9.2767 31.8896 9.6583 32.2949 9.94851C32.7002 10.2388 33.2178 10.3839 33.8457 10.3839ZM40.3158 11.3514L40.3158 3.0958L41.6755 3.0958L41.6755 4.34274L41.7711 4.34274C41.938 3.93428 42.2405 3.60282 42.6783 3.34846C43.1151 3.094 43.6086 2.96686 44.1578 2.96686C44.2607 2.96686 44.3898 2.96866 44.5452 2.97216C44.7006 2.97576 44.8182 2.98115 44.897 2.98834L44.897 4.27823C44.8497 4.26754 44.7405 4.25136 44.5694 4.22989C44.4024 4.20482 44.2249 4.19224 44.038 4.19224C43.5928 4.19224 43.1949 4.27643 42.8453 4.4449C42.4988 4.60969 42.2247 4.83899 42.0221 5.1328C41.8226 5.42311 41.7239 5.75447 41.7239 6.12717L41.7239 11.3514L40.3158 11.3514ZM49.916 11.5233C49.1516 11.5233 48.4774 11.3496 47.8936 11.002C47.3088 10.6509 46.851 10.1563 46.5213 9.51858C46.1906 8.87723 46.0257 8.11934 46.0257 7.24509C46.0257 6.37795 46.1906 5.62554 46.5213 4.98769C46.851 4.34993 47.3109 3.85729 47.8989 3.50965C48.4879 3.16211 49.1683 2.98834 49.939 2.98834C50.5365 2.98834 51.0069 3.07792 51.3534 3.25708C51.7031 3.43265 51.9698 3.63328 52.1525 3.85899C52.3394 4.08119 52.4853 4.26395 52.5882 4.40726L52.7079 4.40726L52.7079 0.343948L54.116 0.343948L54.116 11.3514L52.7551 11.3514L52.7551 10.0829L52.5882 10.0829C52.4853 10.2334 52.3383 10.4233 52.1472 10.6527C51.9561 10.8784 51.6831 11.0808 51.3293 11.26C50.9754 11.4355 50.504 11.5233 49.916 11.5233ZM50.1071 10.3839C50.6709 10.3839 51.1486 10.2513 51.5382 9.98616C51.9277 9.71742 52.2249 9.34661 52.4276 8.87364C52.6302 8.39707 52.7321 7.84709 52.7321 7.22362C52.7321 6.60724 52.6323 6.06806 52.4328 5.60577C52.2343 5.13999 51.9404 4.77807 51.5508 4.52011C51.1602 4.25855 50.6793 4.12773 50.1071 4.12773C49.5096 4.12773 49.013 4.26575 48.615 4.54158C48.2213 4.81392 47.9252 5.18482 47.7257 5.6542C47.5314 6.11999 47.4338 6.64309 47.4338 7.22362C47.4338 7.81124 47.5335 8.34513 47.7319 8.8252C47.9346 9.30177 48.2328 9.68157 48.6265 9.96469C49.0245 10.2441 49.518 10.3839 50.1071 10.3839ZM57.0581 11.3514L57.0581 3.0958L58.4661 3.0958L58.4661 11.3514L57.0581 11.3514ZM57.7742 1.71992C57.4991 1.71992 57.2628 1.63573 57.0633 1.46726C56.8691 1.29888 56.7714 1.09645 56.7714 0.859959C56.7714 0.623473 56.8691 0.421039 57.0633 0.252566C57.2628 0.0841876 57.4991 0 57.7742 0C58.0482 0 58.2824 0.0841876 58.4777 0.252566C58.6761 0.421039 58.7759 0.623473 58.7759 0.859959C58.7759 1.09645 58.6761 1.29888 58.4777 1.46726C58.2824 1.63573 58.0482 1.71992 57.7742 1.71992ZM62.6209 6.38514L62.6209 11.3514L61.2129 11.3514L61.2129 3.0958L62.5727 3.0958L62.5727 4.38578L62.6924 4.38578C62.9066 3.96654 63.2331 3.62969 63.6709 3.37532C64.1077 3.11736 64.6727 2.98834 65.3646 2.98834C65.9852 2.98834 66.528 3.10299 66.9931 3.33229C67.4594 3.55808 67.8205 3.90203 68.0788 4.36422C68.3382 4.82291 68.4674 5.40334 68.4674 6.10561L68.4674 11.3514L67.0593 11.3514L67.0593 6.19169C67.0593 5.54306 66.8725 5.03792 66.4986 4.676C66.1249 4.31049 65.6114 4.12773 64.9594 4.12773C64.5099 4.12773 64.1078 4.21551 63.7539 4.39108C63.4043 4.56674 63.1281 4.8229 62.9244 5.15966C62.7217 5.49651 62.6209 5.90497 62.6209 6.38514ZM74.9071 14.6191C74.2266 14.6191 73.6418 14.5403 73.1525 14.3826C72.6632 14.2286 72.2558 14.0244 71.9303 13.7699C71.6079 13.5192 71.3507 13.2504 71.1607 12.9637L72.2821 12.2543C72.4091 12.4048 72.5697 12.5768 72.765 12.7703C72.9603 12.9673 73.2259 13.1376 73.564 13.2809C73.9063 13.4278 74.3537 13.5012 74.9071 13.5012C75.6462 13.5012 76.2573 13.34 76.7382 13.0175C77.2191 12.6951 77.4607 12.1898 77.4607 11.5019L77.4607 9.82497L77.3409 9.82497C77.237 9.97547 77.09 10.1617 76.8989 10.3839C76.712 10.6024 76.4422 10.7978 76.0883 10.9698C75.7376 11.1381 75.2651 11.2223 74.6676 11.2223C73.9284 11.2223 73.2638 11.0647 72.6758 10.7494C72.091 10.4341 71.6279 9.97547 71.2856 9.37347C70.9475 8.77147 70.7784 8.04054 70.7784 7.18058C70.7784 6.335 70.9433 5.59868 71.274 4.97161C71.6037 4.34095 72.0626 3.85369 72.6516 3.50965C73.2407 3.16211 73.92 2.98834 74.6918 2.98834C75.2882 2.98834 75.7617 3.07792 76.1114 3.25708C76.4663 3.43265 76.7361 3.63328 76.923 3.85899C77.1141 4.08119 77.2612 4.26395 77.3651 4.40726L77.5079 4.40726L77.5079 3.0958L78.8676 3.0958L78.8676 11.5878C78.8676 12.2973 78.6891 12.8741 78.3311 13.3184C77.9772 13.7664 77.4995 14.0942 76.8989 14.302C76.3025 14.5135 75.6389 14.6191 74.9071 14.6191ZM74.8587 10.0829C75.4236 10.0829 75.9014 9.96649 76.2909 9.73359C76.6805 9.5007 76.9766 9.16565 77.1803 8.72853C77.3829 8.2914 77.4837 7.7682 77.4837 7.15911C77.4837 6.5643 77.385 6.03939 77.1855 5.5843C76.9871 5.1292 76.6931 4.77277 76.3025 4.51472C75.9129 4.25676 75.432 4.12773 74.8587 4.12773C74.2623 4.12773 73.7657 4.26395 73.3677 4.53629C72.974 4.80853 72.6778 5.17404 72.4783 5.63263C72.2841 6.09132 72.1865 6.60015 72.1865 7.15911C72.1865 7.73235 72.2862 8.23938 72.4847 8.6801C72.6873 9.11731 72.9855 9.46126 73.3793 9.71203C73.7772 9.9593 74.2707 10.0829 74.8587 10.0829ZM88.1045 4.94474L86.8392 5.26722C86.7605 5.07727 86.6429 4.89272 86.4875 4.71365C86.3363 4.53089 86.1294 4.38039 85.8669 4.26215C85.6044 4.14391 85.2684 4.08478 84.8589 4.08478C84.2982 4.08478 83.831 4.20123 83.4572 4.43412C83.0866 4.66342 82.9017 4.95543 82.9017 5.31016C82.9017 5.62554 83.0298 5.87451 83.2839 6.05727C83.538 6.24003 83.936 6.39232 84.4767 6.51416L85.8375 6.81507C86.6565 6.99423 87.2666 7.26836 87.6687 7.63747C88.0709 8.00289 88.2714 8.47407 88.2714 9.051C88.2714 9.52397 88.1202 9.94681 87.8178 10.3194C87.5196 10.692 87.1017 10.9858 86.5652 11.2009C86.0286 11.4159 85.4039 11.5233 84.692 11.5233C83.7575 11.5233 82.9836 11.3406 82.3714 10.9751C81.7582 10.6096 81.3708 10.0757 81.2081 9.37347L82.5436 9.07247C82.6718 9.51678 82.9123 9.85004 83.2661 10.0722C83.6242 10.2944 84.0914 10.4054 84.6678 10.4054C85.3241 10.4054 85.8449 10.28 86.2313 10.0292C86.6208 9.77474 86.8161 9.47024 86.8161 9.11551C86.8161 8.8288 86.7048 8.58872 86.4811 8.39527C86.2586 8.19823 85.9173 8.05132 85.4553 7.95455L83.9286 7.63208C83.0886 7.45292 82.4723 7.17519 82.0785 6.79899C81.689 6.41919 81.4937 5.94442 81.4937 5.37468C81.4937 4.90889 81.6396 4.49684 81.9294 4.13851C82.2234 3.78019 82.6235 3.49896 83.1285 3.29473C83.6378 3.09041 84.2142 2.98834 84.8589 2.98834C85.7661 2.98834 86.478 3.1675 86.9946 3.52582C87.5154 3.88415 87.8861 4.35712 88.1045 4.94474Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="26.35%"
            bottom="52.76%"
            left="14.05%"
            right="30.78%"
            onClick={() => {
              vectorqwwOnClick();
            }}
            {...getOverrideProps(overrides, "Vectorqww")}
          ></Icon>
        </View>
      </View>
    </Flex>
  );
}
