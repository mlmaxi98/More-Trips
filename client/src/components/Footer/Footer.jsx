import styled from 'styled-components'
export const Footer = () => {
    const networks = [
        {
            url: 'https://github.com/mlmaxi98',
            icon: 'fab fa-github-alt',
        },
        {
            url: 'https://www.linkedin.com/in/joaquin-cardozo/',
            icon: 'fab fa-linkedin',
        },
        {
            url: 'https://www.instagram.com/mlmaxi98/',
            icon: 'fab fa-instagram',
        },
        {
            url: 'https://www.facebook.com/mikuxlyuuzaki/',
            icon: 'fab fa-facebook',
        },
    ]
    return (
        <FooterDiv>
            <div className='links'>
                {
                    networks.map(network => {
                        return (
                            <button>
                                <a href={network.url}>
                                    <i className={network.icon} />
                                </a>
                            </button>
                        )
                    })
                }
            </div>
        </FooterDiv>
    )
}

const FooterDiv = styled.div`

    position:sticky;
    bottom:0;
    z-index:3;
    height:5vh;
    color: white;
    background-color:transparent;
    align-items:center;
    display:flex;
    background-color:rgba(0,0,0,0.6);

    .links{

        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;

        i{
            color:crimson;
            transition:0.5s;
            font-size:2vmax;
            @media (max-width: 415px){
                font-size:4vmax;
                color:white;
            }
            &:hover{
                background-color:transparent;
                color:white;
                @media (max-width: 415px) {
                    color:rgba(0,20,60,1);
                    text-shadow:1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
                }
            }
        }

        button{
            background-color:transparent;
            border:none;
        }
        
    }
`