const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// ... друг код (middlewares, маршрути и т.н.)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
