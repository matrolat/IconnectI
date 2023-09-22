export const buttonStyles = {
      backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
      margin: '10px',
      padding: '15px 45px',
      textAlign: 'center',
      textTransform: 'uppercase',
      transition: '0.5s',
      backgroundSize: '200% auto',
      color: 'white',
      boxShadow: '0 0 20px #eee',
      borderRadius: '10px',
      display: 'block',
      border:0,
      "&:hover": {
     backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
      backgroundPosition: 'right center',
      color: '#fff',
      textDecoration: 'none',   
      }

  };
  
  // You can access the styles like this:
//   console.log(buttonStyles.base.backgroundImage); // Output: "linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)"
//   console.log(buttonStyles.hover.color); // Output: "#fff"
  