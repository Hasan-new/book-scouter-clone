import { Button } from 'bootstrap';
import React from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import './Contact.css'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0px 5px 5px 5px lightgrey',
        border: 'none'
    }
};

Modal.setAppElement('#root')

const Contact = ({ modalIsOpen, closeModal }) => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_deygipl', 'template_bh15yzb', e.target, 'user_mk4eGaKGs3zMADB7SHdMY')
            .then((result) => {
                alert('Your comment sent successfully');
                closeModal();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <form className="contact-form" onSubmit={sendEmail}>
                    <h4>Leave a Comment</h4>
                    <p>Should you experience any problems or wish to share any comments, suggestions, or feedback for this site, please let us know using the form below.</p>
                    <br />
                    <p>Your email address will only be used to reply to your inquiry. We will never send you unsolicited email or share your address with any third-party.</p>
                    <div className='form-group'>
                        <label>Name</label>
                        <input className='form-control' type="text" name="user_name" />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control' type="email" name="user_email" />
                    </div>
                    <div className='form-group'>
                        <label>Comment</label>
                        <textarea className='form-control' name="message" />
                    </div>
                    <div className='mt-2'>
                        <input className='btn btn-success px-5' type="submit" value="Send" />
                        <button className='btn btn-danger px-4' style={{ float: 'right' }} onClick={closeModal}>close</button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default Contact;