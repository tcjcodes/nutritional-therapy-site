import { Title } from "bloomer";
import Link from "gatsby-link";
import React from "react";
import { secondaryFont } from "../../utils/fonts";
import { colorGreen, colorGreenDark } from "../../utils/theme-variables";

const BrandItem = ({ title, size = 1}) => (
  <Title isSize={size} hasTextAlign="centered">
    <Link
      to="/"
      css={{
        ...secondaryFont,
        color: colorGreen,
        textTransform: "none",
        "&:hover": {
          color: colorGreenDark
        }
      }}
    >
      {title}
    </Link>
  </Title>
);

BrandItem.propTypes = {};

export default BrandItem;
