import React from 'react';
import Modal from 'react-modal';
import closeIcon from '../assets/close-icon.svg'; // Importando o SVG
import './SignupModal.css';

const SignupModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
      className="Modal"
      contentLabel="Formulário de Inscrição"
    >
      <img
        src={closeIcon}
        alt="Fechar"
        onClick={onRequestClose}
      />
      <form className="form" >
        <p className="title" >Register</p>
        <p className="message" >Signup now and get full access to our app.</p>
        <div className="flex" >
          <label>
            <input className="input" type="text" placeholder="" required/>
            <span>Firstname</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required/>
            <span>Lastname</span>
          </label>
        </div>  
            
        <label>
          <input className="input" type="email" placeholder="" required/>
          <span>Email</span>
        </label> 

        <button className="submit" type="submit" >Submit</button>
      </form>
    </Modal>
  );
};

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '20px',
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    maxWidth: '400px',
    width: '100%',
    position: 'relative',
  },
};

const styles = {
  closeButton: {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '350px',
    padding: '20px',
    borderRadius: '20px',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    border: '1px solid #333',
  },
  title: {
    fontSize: '28px',
    fontWeight: '600',
    letterSpacing: '-1px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '30px',
    color: '#00bfff',
  },
  titleBeforeAfter: {
    content: '""',
    height: '16px',
    width: '16px',
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: '#00bfff',
  },
  titleBefore: {
    width: '18px',
    height: '18px',
    left: '0px',
    animation: 'pulse 1s linear infinite',
  },
  titleAfter: {
    width: '18px',
    height: '18px',
    left: '0px',
    animation: 'pulse 1s linear infinite',
  },
  message: {
    fontSize: '14.5px',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  flex: {
    display: 'flex',
    width: '100%',
    gap: '6px',
  },
  label: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    width: '100%',
    padding: '20px 05px 05px 10px',
    outline: '0',
    border: '1px solid rgba(105, 105, 105, 0.397)',
    borderRadius: '10px',
    fontSize: 'medium',
  },
  span: {
    color: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    left: '10px',
    top: '0px',
    fontSize: '0.9em',
    cursor: 'text',
    transition: '0.3s ease',
  },
  submit: {
    border: 'none',
    outline: 'none',
    padding: '10px',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '16px',
    transform: '.3s ease',
    backgroundColor: '#00bfff',
  },
  submitHover: {
    backgroundColor: '#00bfff96',
  },
  '@keyframes pulse': {
    from: {
      transform: 'scale(0.9)',
      opacity: '1',
    },
    to: {
      transform: 'scale(1.8)',
      opacity: '0',
    },
  },
};

export default SignupModal;
