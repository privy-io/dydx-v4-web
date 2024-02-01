import { useSelector } from 'react-redux';

import { AppTheme } from '@/state/configs';
import { getAppTheme } from '@/state/configsSelectors';

const ChaosLabsIcon: React.FC = () => {
  const appTheme = useSelector(getAppTheme);

  const fills = appTheme === AppTheme.Light ? ['#1482E5', '#000000'] : ['#1482E5', '#E5E9EB'];

  return (
    <svg width="91" height="17" viewBox="0 0 91 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.4384 13.2558C13.3846 13.2931 13.3295 13.3283 13.2724 13.3615L11.4238 14.4385L4.17188 10.2149V6.61884L11.4198 2.39746L13.2724 3.47652C13.3376 3.51449 13.4007 3.55521 13.4619 3.59848L8.28233 6.60962V6.60225L6.20661 7.81644V9.05132L8.28233 10.2629V9.0364L14.4967 5.41709C14.5028 5.48788 14.5055 5.55928 14.5055 5.63112V7.80972L10.3675 10.2318V11.4757L13.4384 13.2558Z"
        fill={fills[0]}
      />
      <path
        d="M9.34397 1.18863L8.48587 0.688787C7.72318 0.244363 6.78308 0.244363 6.01972 0.688787L1.23307 3.47666C0.470044 3.92109 0 4.74241 0 5.63125V11.207C0 12.0958 0.470044 12.9172 1.23307 13.3616L6.01972 16.1495C6.78308 16.5939 7.72318 16.5939 8.48587 16.1495L9.348 15.6475L2.09628 11.4241V5.41158L2.09911 5.41323L2.09628 5.41L9.34397 1.18863Z"
        fill={fills[0]}
      />
      <path d="M62.777 12.3629V4.57764H64.1102V11.1154H67.7133V12.3629H62.777Z" fill={fills[1]} />
      <path
        d="M70.2932 10.5919L69.5029 12.3629H68.0797L71.5585 4.57764H72.9817L76.4605 12.3629H75.0373L74.2464 10.5919H70.2932ZM73.7041 9.37795L72.2701 6.17032L70.8355 9.37795H73.7041Z"
        fill={fills[1]}
      />
      <path
        d="M81.0141 12.3629H77.5581V4.57764H80.6304C81.1646 4.57764 81.6242 4.64075 82.0079 4.76698C82.3997 4.8932 82.6893 5.06398 82.8781 5.27931C83.2396 5.68026 83.4197 6.1332 83.4197 6.6381C83.4197 7.24693 83.2242 7.69991 82.8324 7.99692C82.6893 8.10087 82.5918 8.16767 82.5388 8.19737C82.4863 8.21968 82.3923 8.26047 82.2565 8.31987C82.7464 8.42382 83.1341 8.64289 83.4197 8.97699C83.7134 9.3037 83.8605 9.71213 83.8605 10.2021C83.8605 10.7442 83.6724 11.2231 83.2961 11.6389C82.8512 12.1215 82.0912 12.3629 81.0141 12.3629ZM78.8906 7.80756H80.5847C81.5489 7.80756 82.0307 7.48454 82.0307 6.83858C82.0307 6.46732 81.9138 6.20002 81.6806 6.03667C81.4468 5.87331 81.086 5.79164 80.5961 5.79164H78.8906V7.80756ZM78.8906 11.1489H80.9805C81.4697 11.1489 81.8426 11.0746 82.0986 10.9261C82.362 10.7701 82.4937 10.4806 82.4937 10.0574C82.4937 9.3668 81.9326 9.02154 80.8111 9.02154H78.8906V11.1489Z"
        fill={fills[1]}
      />
      <path
        d="M87.9162 5.60121C87.5325 5.60121 87.216 5.67917 86.9674 5.8351C86.7194 5.99103 86.5951 6.22863 86.5951 6.54791C86.5951 6.85977 86.7194 7.1011 86.9674 7.27185C87.216 7.4352 87.7435 7.61341 88.5492 7.80647C89.3623 7.99953 89.9724 8.27053 90.379 8.61949C90.7929 8.96851 90.9999 9.48452 90.9999 10.1676C90.9999 10.8433 90.7405 11.3928 90.2204 11.816C89.701 12.2393 89.0196 12.4509 88.1763 12.4509C86.9412 12.4509 85.8459 12.0314 84.8896 11.1923L85.7249 10.201C86.5232 10.8842 87.3518 11.2257 88.2099 11.2257C88.6393 11.2257 88.9779 11.1366 89.2266 10.9584C89.4826 10.7728 89.6109 10.5314 89.6109 10.2345C89.6109 9.93003 89.49 9.69619 89.2494 9.53283C89.0156 9.36202 88.609 9.20981 88.0291 9.07616C87.4499 8.93511 87.0091 8.80885 86.708 8.6975C86.407 8.5787 86.1395 8.42643 85.9057 8.24083C85.4393 7.89188 85.2055 7.35726 85.2055 6.63702C85.2055 5.91678 85.4689 5.36361 85.9964 4.9775C86.5306 4.58397 87.1898 4.38721 87.9727 4.38721C88.4773 4.38721 88.9779 4.46889 89.4752 4.63224C89.9724 4.79558 90.4012 5.02577 90.7627 5.32277L90.0511 6.31402C89.8179 6.10612 89.5014 5.93534 89.1022 5.80169C88.7031 5.66804 88.308 5.60121 87.9162 5.60121Z"
        fill={fills[1]}
      />
      <path
        d="M24.047 4.38721C22.8629 4.38721 21.861 4.77008 21.0648 5.54419L21.0634 5.54519C20.2745 6.31948 19.8807 7.2916 19.8807 8.43967C19.8807 9.58585 20.2665 10.5517 21.0433 11.3136L21.0439 11.3146C21.8268 12.0745 22.8072 12.4509 23.9643 12.4509C25.1463 12.4509 26.1536 11.9892 26.9707 11.0839L27.1609 10.8729L25.9722 9.65318L25.7558 9.85645C25.442 10.1501 25.1524 10.3555 24.8869 10.4827C24.6336 10.5973 24.3191 10.6603 23.9334 10.6603C23.3434 10.6603 22.8361 10.4504 22.3966 10.0177C21.9686 9.58323 21.7542 9.05029 21.7542 8.39841C21.7542 7.73954 21.9719 7.22084 22.4006 6.81607L22.402 6.81454C22.8367 6.39839 23.371 6.18802 24.0261 6.18802C24.4071 6.18802 24.7216 6.24839 24.9776 6.35892L24.9797 6.35987C25.2437 6.47129 25.5394 6.67559 25.866 6.98947L26.0904 7.20438L27.2583 5.92696L27.0729 5.72256C26.2665 4.83489 25.2511 4.38721 24.047 4.38721Z"
        fill={fills[1]}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M47.6624 4.38721C46.5167 4.38721 45.5396 4.77222 44.7521 5.54468C43.9625 6.31199 43.5687 7.27749 43.5687 8.41904C43.5687 9.55454 43.9632 10.5194 44.7514 11.2929L44.7527 11.2939C45.5403 12.0594 46.5173 12.4406 47.6624 12.4406C48.8074 12.4406 49.7845 12.0594 50.572 11.2939L50.5734 11.2929C51.3616 10.5194 51.756 9.55454 51.756 8.41904C51.756 7.27749 51.3623 6.312 50.5727 5.54469C49.7851 4.77223 48.8081 4.38721 47.6624 4.38721ZM45.4207 8.41904C45.4207 7.76676 45.6364 7.22501 46.0671 6.77549C46.5039 6.32689 47.0294 6.10561 47.6624 6.10561C48.2954 6.10561 48.8168 6.32697 49.2462 6.77466L49.2476 6.77617C49.6857 7.22615 49.9034 7.7677 49.9034 8.41904C49.9034 9.06265 49.6864 9.60104 49.2476 10.0516L49.2462 10.0531C48.8168 10.5008 48.2954 10.7222 47.6624 10.7222C47.0294 10.7222 46.5039 10.5009 46.0671 10.0523C45.6357 9.60218 45.4207 9.06359 45.4207 8.41904Z"
        fill={fills[1]}
      />
      <path
        d="M55.2113 4.38721C54.4439 4.38721 53.7767 4.58367 53.2277 4.99291C52.6605 5.41417 52.3843 6.02137 52.3843 6.77092C52.3843 7.50415 52.6222 8.09878 53.1396 8.49282C53.3768 8.68366 53.6463 8.83835 53.9446 8.95789L53.9514 8.96024C54.2423 9.06951 54.6576 9.18959 55.1898 9.32096L55.1938 9.32176C55.7153 9.4438 56.0345 9.57362 56.1944 9.69243L56.1991 9.69565L56.2038 9.69874C56.3355 9.78966 56.402 9.90967 56.402 10.098C56.402 10.2701 56.3362 10.4048 56.1756 10.523C56.0177 10.6376 55.7791 10.7119 55.4277 10.7119C54.7335 10.7119 54.0461 10.4338 53.36 9.83838L53.1262 9.63551L51.9791 11.0155L52.1975 11.2103C53.1228 12.0336 54.1933 12.4509 55.3968 12.4509C56.2179 12.4509 56.9134 12.2409 57.4537 11.7944C57.9987 11.3443 58.2748 10.7498 58.2748 10.0363C58.2748 9.34239 58.0652 8.77028 57.6029 8.37509C57.1809 8.00799 56.5721 7.74216 55.808 7.55804C55.4458 7.47001 55.1515 7.38669 54.923 7.3084C54.6926 7.22931 54.5461 7.16104 54.4648 7.10769C54.3257 7.00954 54.2571 6.88184 54.2571 6.68852C54.2571 6.48456 54.3277 6.36719 54.4574 6.28486C54.6227 6.17969 54.8498 6.11592 55.1596 6.11592C55.4814 6.11592 55.8087 6.17147 56.144 6.28523C56.4813 6.39984 56.73 6.54009 56.9033 6.69703L57.1567 6.92574L58.1646 5.50194L57.9496 5.32269C57.5874 5.02123 57.1621 4.79104 56.6769 4.62937C56.1937 4.46839 55.7052 4.38721 55.2113 4.38721Z"
        fill={fills[1]}
      />
      <path
        d="M29.7507 4.56055H27.9297V12.3667H29.7507V9.42066H32.7195V12.3667H34.5406V4.56055H32.7195V7.68166H29.7507V4.56055Z"
        fill={fills[1]}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40.3586 4.56055H38.6659L35.2261 12.3667H37.1862L37.9072 10.7289H41.1173L41.8383 12.3667H43.7984L40.3586 4.56055ZM38.6686 9.00014L39.5126 7.08737L40.3559 9.00014H38.6686Z"
        fill={fills[1]}
      />
    </svg>

    //   <svg
    //     className={className}
    //     fill="none"
    //     height="24"
    //     viewBox="0 0 230 24"
    //     width="230"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       clip-rule="evenodd"
    //       fill-rule="evenodd"
    //       d="m56.7245 16.4161c.5693.3173 1.2086.476 1.918.476.6626 0 1.2273-.14 1.694-.42.2503-.1472.4696-.3345.658-.5617v.8697h2.086v-10.38801h-2.184v3.64141c-.1734-.18966-.3694-.3488-.588-.47741-.476-.28-1.0314-.42-1.666-.42-.7094 0-1.3487.15867-1.918.476-.5694.31733-1.022.76531-1.358 1.34401-.3267.5787-.49 1.2647-.49 2.058 0 .784.1633 1.4653.49 2.044.336.5787.7886 1.0313 1.358 1.358zm3.262-1.568c-.2894.168-.6114.252-.966.252-.364 0-.6907-.084-.98-.252-.2894-.168-.5227-.406-.7-.714-.168-.3173-.252-.6907-.252-1.12 0-.4387.084-.812.252-1.12.1773-.308.4106-.546.7-.714.2893-.168.616-.252.98-.252.3546 0 .6766.084.966.252.2893.168.518.406.686.714.1773.308.266.6813.266 1.12 0 .4293-.0887.8027-.266 1.12-.168.308-.3967.546-.686.714zm13.5321 2.044c-.6626 0-1.232-.14-1.708-.42-.2503-.1472-.4696-.3345-.658-.5617v.8697h-2.0859v-10.38801h2.1839v3.65341c.1781-.19494.3788-.35809.602-.48941.476-.28 1.0314-.42 1.666-.42.7094 0 1.344.15867 1.904.476.5694.31733 1.0174.76531 1.344 1.34401.336.5787.504 1.2647.504 2.058 0 .784-.168 1.4653-.504 2.044-.3266.5787-.7746 1.0313-1.344 1.358-.56.3173-1.1946.476-1.904.476zm-.378-1.792c.364 0 .686-.084.966-.252.2894-.168.518-.406.686-.714.1774-.3173.266-.6907.266-1.12 0-.4387-.0886-.812-.266-1.12-.168-.308-.3966-.546-.686-.714-.28-.168-.602-.252-.966-.252s-.6906.084-.98.252c-.2893.168-.518.406-.686.714s-.252.6813-.252 1.12c0 .4293.084.8027.252 1.12.168.308.3967.546.686.714.2894.168.616.252.98.252zm6.339 4.5079c-.392 0-.7793-.0606-1.162-.182-.3826-.1213-.6953-.2893-.938-.504l.798-1.554c.168.1494.3594.266.574.35.224.084.4434.126.658.126.308 0 .5507-.0746.728-.224.1867-.14.3547-.378.504-.714l.0268-.0631-3.2608-7.59485h2.254l2.1143 5.11525 2.1277-5.11525h2.1l-3.402 7.99395c-.2426.6067-.5226 1.0827-.84 1.428-.308.3454-.6533.588-1.036.728-.3733.14-.7886.21-1.246.21zm-29.1651-2.716c-.8587 0-1.6147-.168-2.268-.504-.644-.336-1.1434-.7933-1.498-1.372-.3547-.588-.532-1.2553-.532-2.002 0-.756.1726-1.4233.518-2.002.3546-.588.8353-1.04535 1.442-1.37201.6066-.336 1.2926-.504 2.058-.504.7373 0 1.4.15866 1.988.476.5973.308 1.0686.75601 1.414 1.34401.3453.5787.518 1.274.518 2.086 0 .084-.0047.182-.014.294-.0094.1027-.0187.2007-.028.294h-5.6989c.044.2005.1143.3872.2109.56.1866.308.4433.546.77.714.336.1587.728.238 1.176.238.4013 0 .7513-.0607 1.05-.182.308-.1213.588-.3033.84-.546l1.162 1.26c-.3454.392-.7794.6953-1.302.91-.5227.2053-1.1247.308-1.806.308zm-1.918-5.166c-.1024.1867-.1717.3967-.2081.63h3.7092c-.0354-.2373-.1058-.452-.2111-.644-.1587-.2893-.378-.5133-.658-.672-.28-.168-.6067-.252-.98-.252-.3734 0-.7047.084-.994.252-.28.1587-.4994.3873-.658.686zm-7.74-2.47801v7.53201h2.184v-3.556c0-.7187.182-1.246.546-1.582.3733-.3453.8587-.518 1.456-.518.084 0 .1633.0047.238.014.0747 0 .1587.0047.252.014v-2.01601c-.7093 0-1.3113.14-1.806.42-.3169.17337-.5782.40036-.784.68101v-.98901zm-5.094 7.64401c-.8586 0-1.6146-.168-2.268-.504-.644-.336-1.1433-.7933-1.498-1.372-.3546-.588-.532-1.2553-.532-2.002 0-.756.1727-1.4233.518-2.002.3547-.588.8354-1.04535 1.442-1.37201.6067-.336 1.2927-.504 2.058-.504.7374 0 1.4.15866 1.988.476.5974.308 1.0687.75601 1.414 1.34401.3454.5787.518 1.274.518 2.086 0 .084-.0046.182-.014.294-.0093.1027-.0186.2007-.028.294h-5.6988c.044.2005.1142.3872.2108.56.1867.308.4434.546.77.714.336.1587.728.238 1.176.238.4014 0 .7514-.0607 1.05-.182.308-.1213.588-.3033.84-.546l1.162 1.26c-.3453.392-.7793.6953-1.302.91-.5226.2053-1.1246.308-1.806.308zm-2.126-4.536h3.7091c-.0354-.2373-.1058-.452-.2111-.644-.1586-.2893-.378-.5133-.658-.672-.28-.168-.6066-.252-.98-.252-.3733 0-.7046.084-.994.252-.28.1587-.4993.3873-.658.686-.1024.1867-.1717.3967-.208.63zm-15.5122-3.10795 2.716 7.53195h2.1l1.7445-4.6794 1.6855 4.6794h2.114l2.73-7.53195h-1.932l-1.8295 5.10285-1.7965-5.10285h-1.848l-1.8516 5.10285-1.7744-5.10285zm-4.3908 7.64395c-.8026 0-1.5166-.168-2.142-.504-.616-.336-1.106-.7933-1.46997-1.372-.35467-.588-.532-1.2553-.532-2.002 0-.756.17733-1.4233.532-2.002.36397-.588.85397-1.04535 1.46997-1.37201.6254-.336 1.3394-.504 2.142-.504.7934 0 1.5027.168 2.128.504.6254.32666 1.1154.77931 1.47 1.35801.3547.5787.532 1.2507.532 2.016 0 .7467-.1773 1.414-.532 2.002-.3546.5787-.8446 1.036-1.47 1.372-.6253.336-1.3346.504-2.128.504zm0-1.792c.364 0 .6907-.084.98-.252.2894-.168.518-.406.686-.714.168-.3173.252-.6907.252-1.12 0-.4387-.084-.812-.252-1.12s-.3966-.546-.686-.714c-.2893-.168-.616-.252-.98-.252s-.6906.084-.98.252c-.2893.168-.5226.406-.7.714-.168.308-.252.6813-.252 1.12 0 .4293.084.8027.252 1.12.1774.308.4107.546.7.714.2894.168.616.252.98.252zm-13.5335-8.12002v9.80002h2.268v-2.702h1.974c.87733 0 1.63333-.14 2.268-.42.63467-.2894 1.12467-.7 1.47-1.232s.518-1.162.518-1.89c0-.73735-.17267-1.37202-.518-1.90402s-.83533-.938-1.47-1.218c-.63467-.28933-1.39067-.434-2.268-.434zm2.268 5.25002h1.848c.7 0 1.22267-.1494 1.568-.448.34533-.2987.518-.714.518-1.246 0-.54135-.17267-.96135-.518-1.26002s-.868-.448-1.568-.448h-1.848z"
    //       fill={fills[0]}
    //       fill-rule="evenodd"
    //     />
    //     <path
    //       d="m114.002 19.198c-.08.0554-.162.1078-.247.1572l-2.751 1.6027-10.792-6.2853v-5.35152l10.786-6.28207 2.757 1.60581c.097.0565.191.1171.282.1815l-7.708 4.48105v-.01097l-3.089 1.8069v1.8377l3.089 1.803v-1.8252l9.248-5.38611c.009.10535.013.21161.013.31852v3.24209l-6.158 3.6044v1.8512z"
    //       fill={fills[1]}
    //     />
    //     <path
    //       d="m107.909 1.23987-1.277-.743841c-1.135-.661373-2.534-.661373-3.67 0l-7.1233 4.148791c-1.1355.66138-1.835 1.88364-1.835 3.20638v8.2976c0 1.3227.6995 2.545 1.835 3.2064l7.1233 4.1488c1.136.6613 2.535.6613 3.67 0l1.283-.747-10.7917-6.2852v-8.94751l.0042.00245-.0042-.0048z"
    //       fill={fills[1]}
    //     />
    //     <g fill={fills[2]}>
    //       <path d="m187.426 17.8674v-11.58563h1.984v9.72923h5.362v1.8564z" />
    //       <path d="m198.611 15.232-1.176 2.6354h-2.118l5.177-11.58563h2.118l5.177 11.58563h-2.118l-1.177-2.6354zm5.076-1.8066-2.134-4.77347-2.135 4.77347z" />
    //       <path d="m214.566 17.8674h-5.143v-11.58563h4.572c.795 0 1.479.09392 2.05.28177.583.18784 1.014.44198 1.295.76243.538.59668.806 1.27072.806 2.0221 0 .90603-.291 1.58013-.874 2.02213-.213.1547-.358.2541-.437.2983-.078.0332-.218.0939-.42.1823.729.1547 1.306.4807 1.731.9779.437.4862.656 1.094.656 1.8232 0 .8067-.28 1.5194-.84 2.1382-.662.7182-1.793 1.0773-3.396 1.0773zm-3.16-6.779h2.521c1.435 0 2.152-.4807 2.152-1.44199 0-.55249-.174-.95028-.521-1.19337-.348-.2431-.885-.36464-1.614-.36464h-2.538zm0 4.9724h3.11c.728 0 1.283-.1105 1.664-.3315.392-.2321.588-.663.588-1.2928 0-1.0277-.835-1.5415-2.504-1.5415h-2.858z" />
    //       <path d="m224.837 7.80663c-.571 0-1.042.11602-1.412.34807-.369.23204-.554.58563-.554 1.06077 0 .46409.185.82323.554 1.07733.37.2431 1.155.5083 2.354.7956 1.21.2873 2.118.6906 2.723 1.2099.616.5194.924 1.2873.924 2.3039 0 1.0055-.386 1.8232-1.16 2.453-.773.6299-1.787.9448-3.042.9448-1.838 0-3.468-.6243-4.891-1.8729l1.243-1.4752c1.188 1.0166 2.421 1.5249 3.698 1.5249.639 0 1.143-.1326 1.513-.3978.381-.2762.572-.6354.572-1.0773 0-.4531-.18-.8011-.538-1.0442-.348-.2542-.953-.4807-1.816-.6796-.862-.2099-1.518-.3978-1.966-.5635-.448-.1768-.846-.4034-1.194-.6796-.694-.5193-1.042-1.3149-1.042-2.38673s.392-1.89503 1.177-2.46962c.795-.58563 1.776-.87845 2.941-.87845.751 0 1.496.12155 2.236.36464s1.378.58564 1.916 1.02763l-1.059 1.47513c-.347-.30939-.818-.56353-1.412-.76243-.594-.19889-1.182-.29834-1.765-.29834z" />
    //       <path d="m129.79 6c-1.762 0-3.253.56978-4.438 1.72178l-.002.00148c-1.174 1.15227-1.76 2.59894-1.76 4.30744 0 1.7057.574 3.1431 1.73 4.2768l.001.0015c1.165 1.1309 2.624 1.691 4.346 1.691 1.759 0 3.258-.6871 4.474-2.0343l.283-.3139-1.769-1.8152-.322.3025c-.467.437-.898.7427-1.293.9319-.377.1706-.845.2644-1.419.2644-.878 0-1.633-.3124-2.287-.9563-.637-.6466-.956-1.4397-.956-2.4098 0-.9805.324-1.7524.962-2.35477l.002-.00227c.647-.6193 1.442-.93237 2.417-.93237.567 0 1.035.08984 1.416.25433l.003.00142c.393.1658.833.46984 1.319.93694l.334.31982 1.738-1.901-.276-.30419c-1.2-1.32099-2.711-1.98721-4.503-1.98721z" />
    //       <path
    //         clip-rule="evenodd"
    //         d="m164.933 6c-1.705 0-3.159.57296-4.331 1.7225-1.175 1.14188-1.761 2.5787-1.761 4.2775 0 1.6898.587 3.1257 1.76 4.2767l.002.0016c1.172 1.1392 2.626 1.7064 4.33 1.7064s3.158-.5672 4.33-1.7064l.002-.0016c1.173-1.151 1.76-2.5869 1.76-4.2767 0-1.6988-.586-3.1356-1.761-4.27748-1.172-1.14955-2.626-1.72252-4.331-1.72252zm-3.336 6c0-.9707.321-1.7769.962-2.44586.65-.66759 1.432-.99688 2.374-.99688s1.718.32942 2.357.99564l.002.00226c.652.66964.976 1.47554.976 2.44484 0 .9578-.323 1.759-.976 2.4295l-.002.0023c-.639.6662-1.415.9956-2.357.9956s-1.724-.3293-2.374-.9969c-.642-.6698-.962-1.4713-.962-2.4305z"
    //         fill-rule="evenodd"
    //       />
    //       <path d="m176.167 6c-1.142 0-2.135.29237-2.952.90138-.844.62691-1.255 1.53051-1.255 2.64596 0 1.09116.354 1.97606 1.124 2.56246.353.284.754.5142 1.198.6921l.01.0035c.433.1626 1.051.3413 1.843.5368l.006.0012c.776.1816 1.251.3748 1.489.5516l.007.0048.007.0046c.196.1353.295.3139.295.5942 0 .256-.098.4566-.337.6325-.235.1705-.59.281-1.113.281-1.033 0-2.056-.4138-3.077-1.2999l-.348-.3019-1.707 2.0537.325.2898c1.377 1.2253 2.97 1.8462 4.761 1.8462 1.222 0 2.257-.3124 3.061-.977.811-.6698 1.222-1.5545 1.222-2.6163 0-1.0326-.312-1.884-1-2.4721-.628-.5463-1.534-.9419-2.671-1.2159-.539-.131-.977-.255-1.317-.3715-.343-.1177-.561-.2193-.682-.2987-.207-.14606-.309-.33609-.309-.62379 0-.30352.105-.47818.298-.6007.246-.15652.584-.25142 1.045-.25142.479 0 .966.08267 1.465.25197.502.17055.872.37927 1.13.61282l.377.34035 1.5-2.11883-.32-.26675c-.539-.44863-1.172-.79118-1.894-1.03177-.719-.23956-1.446-.36038-2.181-.36038z" />
    //       <path d="m138.278 6.26059h-2.71v11.61681h2.71v-4.3842h4.418v4.3842h2.71v-11.61681h-2.71v4.64471h-4.418z" />
    //       <path
    //         clip-rule="evenodd"
    //         d="m154.064 6.26059h-2.519l-5.119 11.61681h2.917l1.073-2.4374h4.777l1.073 2.4374h2.917zm-2.515 6.60681 1.256-2.8465 1.255 2.8465z"
    //       />
    //     </g>
    //   </svg>
  );
};

export default ChaosLabsIcon;
