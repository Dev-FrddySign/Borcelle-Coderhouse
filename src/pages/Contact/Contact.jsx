import React from 'react'
import './Contacto.css'


const Contacto = () => {
    return (
        <>
        <div className="container-fluid">
            <fieldset className='fieldset-form d-flex' style={{ border: "1px solid black" }}>
                <div className="row">
                    <div className="col-md-6">
                        <div class="mapouter">
                            <iframe
                                title="Mapa de Google"
                                src="https://maps.google.com/maps?q=quilpue&t=k&z=10&ie=UTF8&iwloc=&output=embed"
                                width="600px"
                                height="500px"
                                style={{ 
                                    border: "2 solid black",
                                    marginTop:"20px"
                                }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    <address>
                        <strong>Borcelle, Ltda</strong><br /> Belloto 2000, Los Araucanos 1674<br /> Quilpue, CP 27400<br /> <abbr title="Telefono de contacto">P:</abbr> (+56) 897-33-44-66
                    </address>
                </div>
                <div className="col-md-6">
                    <h3 className="text-center">
                        Feedback
                    </h3>
                    <p>Te invitamos a llenar el formulario y dejar tu opinion para seguir mejorando, Gracias.</p>
                    <form role="form">
                        <div className="form-group">
                            <label for="exampleInputName1">
                                Nombre
                            </label>
                            <input placeholder='Juan Perez' type="text" className="form-control" id="exampleInputName1" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">
                                Correo Electronico
                            </label>
                            <input placeholder='tucorreo@hotmail.com' type="email" className="form-control" id="exampleInputEmail1" required />
                        </div>
                        <div className="form-group">

                            <label for="exampleInputPassword1">
                                Numero de telefono
                            </label>
                            <input placeholder='+569 99999999' type="" className="form-control" id="exampleInputNumber1" required/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputtextarea1">
                                Mensaje
                            </label>
                            <textarea placeholder='Mensaje' className='form-control'>
                            </textarea>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" /> Presiona antes de enviar.
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </form>
                </div>
            </fieldset>
        </div >
        </>
    )
}

export default Contacto
