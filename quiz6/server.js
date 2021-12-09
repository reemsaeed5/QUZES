/*========================= Quzi06: nodeJs and ExpressJs ===================*/

/* 1- create a backend from scratch using the Express framework 
    and run it on PORT 5000 */
    const express = require('express');
    const app = express();
    app.use(express.json());
    const PORT = process.env.PORT || 5000;
    
    app.listen(PORT, () => {console.log(`Server On ${PORT}`);
    });