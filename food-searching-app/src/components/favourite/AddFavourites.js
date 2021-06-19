import React, { useMemo, useState } from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const AddFavourites = ({count, fav, color, onFav}) => {

    const[hoverFav, setHoverFav]=useState(0);
    const getColor = index => {
        if(hoverFav >= index){
            return color.filled;
        }else if(!hoverFav && fav >= index){
            return color.filled;
        }
        
        return color.unfilled;
    }

    const heartFav = useMemo( () => {
        return Array(count)
            .fill(0)
            .map((_,i ) => i + 1)
            .map((idx) => (
                <FontAwesomeIcon
                    key={idx}
                    className="favourite-pointer"
                    icon="heart"
                    onClick={() => onFav(idx)}
                    style={{color: getColor(idx)}}
                    onMouseEnter={() => setHoverFav(idx)}
                    onMouseLeave={() => setHoverFav(0)}
                />
        ));
    }, [count, fav, hoverFav]);

    console.log(FontAwesomeIcon);
    return <div>{heartFav}</div>
};

AddFavourites.propTypes = {
    count: PropTypes.number,
    fav: PropTypes.number,
    onChange: PropTypes.func,
    color:{
        filled: PropTypes.string,
        unfilled: PropTypes.string,
    },
};

AddFavourites.defaultProps = {
    count: 1,
    fav: 0,
    color: {
        filled: "#f53b3b",
        unfilled: "#DCDCDC"
    },
};

export default AddFavourites
