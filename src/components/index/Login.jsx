import React from 'react'
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '20px',
        margin: '0px',
        // marginRight: '-50%',
        width: "30%",
        transform: 'translate(-50%, -50%)',
        border: '2px solid var(--primary)',
        borderRadius: '12px',
    },
};


export default function Login(props) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'var(--primary)';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='boxModal'>
            <button className="headBtn-one" onClick={openModal}>{props.login}</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='login-main'>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Login Your Account Here</h2>
                    <CloseIcon onClick={closeModal} />
                </div>

                <div className='login-form btn'>
                    <p>You Don't have an Account? <span>Sign Up</span></p>
                    <div className="login-socialBtn">
                        <button><a href="#">Login</a></button>
                        <button><a href="#">Login</a></button>
                        <button><a href="#">Login</a></button>
                        <button><a href="#">Login</a></button>
                    </div>
                    <form action="">
                        <input type="text" placeholder='Enter your Email' /><br />
                        <input type="text" placeholder='Enter your Email' /><br />
                        <button><a href="#">Login</a></button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
