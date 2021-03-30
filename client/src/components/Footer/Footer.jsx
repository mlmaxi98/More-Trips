import React from 'react'
import { FooterDiv } from './StyledFooter'

export function Footer() {


    return (

        <FooterDiv>
            <div className='links'>
                <button>
                    <a href='https://github.com/mlmaxi98/FT10-PI-Countries'>
                        <i className="fab fa-github-alt" ></i>
                    </a>
                </button>

                <button>
                    <a href='https://www.linkedin.com/in/joaquin-cardozo/'>
                        <i className="fab fa-linkedin"  ></i>
                    </a>
                </button>

                <button>
                    <a href='https://www.instagram.com/mlmaxi98/'>
                        <i className="fab fa-instagram" ></i>
                    </a>
                </button>

                <button>
                    <a href='https://www.facebook.com/mikuxlyuuzaki/'>
                        <i className="fab fa-facebook" ></i>
                    </a>
                </button>
            </div>

        </FooterDiv>

    )
}