"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { socials } from "../constants";
import { TypingText, TitleText, InsightCard } from "../components";
import { footerVariants } from "../utils/motion";
const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 `}>
      <div className="flex items-center justify-between flex-wrap gap-5 ">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white ">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="rounded-[32px] gap-[12px] h-fit py-4 px-6 flex items-center bg-[#25618b] "
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain "
          />
          <span className="font-normal text-[16px] text-white ">
            ENTER METAVERSE
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10 " />
        <div className="flex items-center justify-between gap-4 flex-wrap ">
          <h4 className="font-extrabold text-white tet-[24px] ">METAVERSUS</h4>
          <p className="font-normal text-white opacity-50 text-[14px] ">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className="flex gap-4 ">
            {socials.map((social, index) => (
              <img
                src={social.url}
                key={social.name}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
