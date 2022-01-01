import { Box, Title } from 'bloomer';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import Dotdotdot from 'react-dotdotdot/src/index';
import { serifFont } from '../../utils/fonts';
import {
    colorBrown,
    colorBrownDark,
    colorGreenDark,
} from '../../utils/theme-variables';

const cardWrapperStyles = {
    display: 'block',
    position: 'relative',
    width: '100%',
    color: colorBrown,
};
const cardImageStyles = (thumbnail) => ({
    display: 'block',
    height: '240px',
    overflowY: 'hidden',
    background: `url(${thumbnail}) center no-repeat`,
    backgroundSize: 'cover',
});
const cardOverlayStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',

    opacity: 0,
    padding: '0.75rem',
    overflowY: 'hidden',
    position: 'absolute',
    top: 0,
    height: '100%',
    left: '0',
    width: '100%',
    hasTextAlign: 'center',
    transition: 'all 0.25s ease',
    '&:hover': {
        opacity: 1,
        background: 'rgba(245,245,245,0.98)',
    },
};
const headingStyles = {
    ...serifFont,
    color: colorGreenDark,
    marginBottom: 0,
};
const titleBorderStyles = {
    margin: `1rem 0`,
    borderBottom: `1px solid rgb(79, 109, 26)`,
    width: `1.75rem`,
    padding: 0,
};
const excerptStyles = {
    fontSize: `0.9rem`,
    textTransform: 'none',
    color: colorBrownDark,
    marginBottom: '0.75rem',
};

const ProductCard = ({ slug, thumbnail, title, excerpt }) => (
    <Link data-testid="fav-card" to={slug} css={cardWrapperStyles}>
        <Box style={{ padding: '0.5em' }}>
            <div css={cardImageStyles(thumbnail)}/>
            <div css={cardOverlayStyles}>
                <div css={{ width: '100%' }}>
                    <Title style={{ margin: 0 }} isSize={6}>
                        <Dotdotdot clamp={3}>
                            <p css={headingStyles}>{title}</p>
                        </Dotdotdot>
                    </Title>
                </div>

                <div css={titleBorderStyles}/>
                <div css={excerptStyles}>
                    <Dotdotdot clamp={3}>
                        <p>{excerpt}</p>
                    </Dotdotdot>
                </div>
                <em>Read More</em>
            </div>
        </Box>
    </Link>
);

ProductCard.propTypes = {
    slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
};

export default ProductCard;
