import { useState } from "react";
import { moneyFormat } from "./helpers";

function Header({total, money}) {

    return(
        <>
            {total > 0 && money - total !== 0 && (
                <div className="header">Harcamak için <span>{moneyFormat(money - total)}</span>$ paranız vardır</div>
            )}
            {total === 0 && (
                <div className="header">Harcamak için <span>{moneyFormat(money)}</span>$ paranız var!</div>
            )}
           { money - total === 0 && (
            <div className="header">Paran bitti dostum!</div>
           )}

            <style jsx>{`
                .header{
                    background: linear-gradient(to bottom, #20b820, #14be2a);
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 24px;
                    letter-spacing: 1px;
                    position: sticky;
                    top:0;
                }

                .header span {
                    margin: 0 10px;
                    font-weight: bold;
                }
            `}
            </style>
        </>
    )
}

export default Header;