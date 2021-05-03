import styled from 'styled-components';

export const Box = styled.div`
padding: 20px;
background: black;
position: absolute;
width: 100%;


@media (max-width: 100%) {
	padding: 10px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	float: right;
`

export const Col = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 5px;
align-content: justify;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(210px, 1fr));
grid-gap: 50%;

@media (max-width: 100%) {
	grid-template-columns: repeat(auto-fill,
						minmax(250px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 10px;
font-size: 12px;
text-decoration: none;

&:hover {
	color: white;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.h5`
font-size: 20px;
color: #fff;
margin-bottom: 20px;
margin-top: 20px;
font-weight: bold;
align-content: justify;
`;

export const P = styled.p`
font-size: 12px;
color: #fff;
`;

export const Form = styled.div`
display: flex;
width: 100%;
flex-end: 0;
`;