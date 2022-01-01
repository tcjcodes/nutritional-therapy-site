import { Box, Title } from 'bloomer';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import { serifFont } from '../../utils/fonts';
import { colorBrown } from '../../utils/theme-variables';

const cardWrapperStyles = {
    display: 'block',
    position: 'relative',
    width: '100%',
    color: colorBrown,
};
const cardImageStyles = (thumbnail) => ({
    display: 'block',
    height: '300px',
    overflowY: 'hidden',
    background: `url(${thumbnail}) center no-repeat`,
    backgroundSize: 'cover',
});
const cardOverlayStyles = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0.75rem',
    overflowY: 'hidden',
    position: 'absolute',
    bottom: 0,
    minHeight: '3rem',
    left: '0',
    width: '100%',
    hasTextAlign: 'center',
    opacity: 1,
    background: 'rgba(245,245,245,0.98)',
};
const headingStyles = {
    ...serifFont,
    textTransform: 'none',
    marginBottom: 0,
};

const LabCard = ({ slug, thumbnail, title }) => (
    <Link data-testid={`lab-card`} to={slug} css={cardWrapperStyles}>
        <Box style={{ padding: '0.5em' }}>
            <div css={cardImageStyles(thumbnail)}/>
            <div css={cardOverlayStyles}>
                <div css={{ width: '100%' }}>
                    <Title hasTextAlign="centered" style={{ margin: 0 }} isSize={5}>
                        <p css={headingStyles}>{title}</p>
                    </Title>
                </div>
            </div>
        </Box>
    </Link>
);

LabCard.propTypes = {
    slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default LabCard;
