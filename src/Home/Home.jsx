import React from 'react';
import './Home.css';
import Head from '../header/Head';
import Foot from '../Footer/Foot';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
    const characters = [
        {
            img: "https://rickandmortyapi.com/api/character/avatar/130.jpeg",
            name: "Galactic Federation President",
            status: "Dead - Alien",
            isAlive: false,
            lastLocation: "unknown",
            firstSeen: "The Wedding Squanchers",
        },
        {
            img: "https://rickandmortyapi.com/api/character/avatar/132.jpeg",
            name: "Gar's Mytholog",
            status: "Dead - Mythological Creature",
            isAlive: false,
            lastLocation: "Nuptia 4",
            firstSeen: "Big Trouble in Little Sanchez",
        },
        {
            img: "https://rickandmortyapi.com/api/character/avatar/229.jpeg",
            name: "Morty Mart Manager Morty",
            status: "Alive - Human",
            isAlive: true,
            lastLocation: "Citadel of Ricks",
            firstSeen: "The Ricklantis Mixup",
        },
        {
            img: "https://rickandmortyapi.com/api/character/avatar/347.jpeg",
            name: "President Curtis",
            status: "Alive - Human",
            isAlive: true,
            lastLocation: "Earth (Replacement Dimension)",
            firstSeen: "Get Schwifty",
        },
        {
            img: "https://rickandmortyapi.com/api/character/avatar/434.jpeg",
            name: "Super Weird Rick",
            status: "unknown - Human",
            isAlive: false,
            lastLocation: "unknown",
            firstSeen: "Close Rick-counters of the Rick Kind",
        },
        {
            img: "https://rickandmortyapi.com/api/character/avatar/671.jpeg",
            name: "New Improved Galactic Federation Guard",
            status: "Dead - Alien",
            isAlive: false,
            lastLocation: "NX-5 Planet Remover",
            firstSeen: "Star Mort: Rickturn of the Jerri",
        }
    ];
    return (
        <>
            <Head />
            <div className="title d-flex justify-content-center">
                <h1>The Rick and Morty API</h1>
            </div>
            <div className="box">
                <Row xs={1} md={2} className="g-4">
                    {characters.map((character, idx) => (
                        <Col key={idx}>
                            <Card className="h-100 bg-dark text-light ">
                                <Row noGutters className='card'>
                                    <div className='imgs'>
                                        <img src={character.img} alt="" />
                                    </div>
                                    <Col md={8} className='ca-body p-0 d-flex flex-column align-content-between flex-wrap'>
                                        <Card.Body className='p-3 d-flex flex-column align-content-between'>
                                            <h2 className='hovv m-0'>{character.name}</h2>
                                            <Card.Text>
                                                <span
                                                    className="dot"
                                                    style={{
                                                        backgroundColor: character.isAlive ? "green" : "red",
                                                        display: "inline-block",
                                                        width: "12px",
                                                        height: "12px",
                                                        borderRadius: "50%",
                                                        marginRight: "8px",
                                                    }}
                                                ></span>{character.status}
                                            </Card.Text>
                                            <Card.Text className='d-flex flex-column'>
                                                <strong className='light'>Last known location:</strong>
                                                <span className='hovv'>{character.lastLocation}</span>
                                            </Card.Text>
                                            <Card.Text className='d-flex flex-column'>
                                                <strong className='light'>First seen in:</strong>
                                                <span className='hovv'>{character.firstSeen}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <Foot />
        </>
    );
};


export default Home;
