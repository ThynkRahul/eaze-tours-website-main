import React from "react";

interface IDayIconProp {
    number: number;
}

function DayIcon({number}: IDayIconProp) {

    const getIcons = () => {
        if (number < 10) {
            var className = "fa-solid fa-" + number; 
            return <i className={className} />;
        }
        else {
            var className = "fa-solid fa-" + Math.floor(number/10);
            var className0 = "fa-solid fa-" + number%10;
            return (
                <>
                    <i className={className} />
                    <i className={className0} />
                </>
            );
        }
    }
    return (
        <>
            {getIcons()}
        </>
    )
}

export default DayIcon;