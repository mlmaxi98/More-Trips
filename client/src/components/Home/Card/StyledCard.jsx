import styled from 'styled-components'
export const Cards = styled.div`
    width:	${(props) => props.act ? "25%" : "15%"};
	@media (max-width: 415px) {
		width:38%;
		margin: 4vmax auto;
		height: 25vh;
    }  
	height: 20vh;
    margin: ${(props) => props.act ? "2vmax auto" : " 1vmax auto"};
	outline:none;
	border-radius: 40px;
	padding: 2vmax;
	background: transparent;
	position: relative;
	display: flex;
	align-items: flex-end;
	transition: 0.4s ease-out;
    justify-content:center;
	box-shadow: 0px 7px 10px rgba(0,0,0, 0.9);
    &:hover{
		transform: translateY(20px);
		
		@media (max-width: 415px) {
		transform: translateY(5px);
	}
		&:before{
			opacity: 1
        }
		.info{
			opacity: 1;
			transform: translateY(0px)
        }
    }
	&:before{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 40px;
		background: rgba(0,0,0, 0.6);
		z-index: 2;
		transition: 0.5s;
		opacity: 0;
    }
	img{
		width: 100%;
		height: 100%;
		object-fit:cover;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 40px;
    }

	.info{
		position: relative;
		z-index: 3;
		color: white;
		opacity: 0;
		transform: translateY(30px);
		@media (max-width: 415px) {
		transform: translateY(5px);
	}
		transition: 0.5s ease-out;
		h2{
			margin: 0px;
			@media (max-width: 415px) {
				font-size:3vmax;
	}
        }
		p{
			letter-spacing: 1px;
			font-size: 15px;
			margin-top: 8px;
        }
		button{
			padding: 0.6rem;
			@media (max-width: 415px) {
				
				padding: 1vmax;
				background: rgba(0,20,60,1);
	}
			outline: none;
			border: none;
			border-radius: 20px;
			background: crimson;
			color: white;
			font-weight: bold;
			cursor: pointer;
			transition: 0.4s;
			&:hover{
				background: white;
				color: black;
				}
            }
    }
`