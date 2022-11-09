import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {LogoutButton} from "./LogoutButton";
import {LoginButton} from "./LoginButton";
import Table from "react-bootstrap/Table";
import Tabs from "react-bootstrap/Tabs"
import {Tab} from "react-bootstrap";
import Posts from "./FetchData";



const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [key, setKey] = useState('Perfil');

    return(
        <div>
            {isAuthenticated ?(
                <div>
                    <br/>
                    <br/>
                    <h2>¡Hola {user.name}!</h2>
                    <br/>
                    <img src={user.picture} alt={user.name}/>
                    <h3>Aquí puedes ver tus datos</h3>

                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="Perfil" title="Perfil">
                            <Table striped bordered hover>
                                <tbody>
                                <tr>
                                    <td>Nombre</td>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <td>E-Mail</td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <td>Dirección</td>
                                    <td>{user.address}</td>
                                </tr>
                                <tr>
                                    <td>Teléfono</td>
                                    <td>{user.phone_number}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="Pedidos" title="Pedidos">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Productos</th>
                                    <th>Valor</th>
                                </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="data" title='data'>

                        </Tab>
                    </Tabs>
                    <LogoutButton/>
                </div>
            ) : (
                <div>
                    <br/>
                    <br/>
                    <h1>¡No haz iniciado sesión!</h1>
                    <LoginButton/>
                </div>
            )
            }
        </div>

    )
};

export default Profile;