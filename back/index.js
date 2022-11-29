require('dotenv').config('.env'); // Variables de entorno
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo'); // Archivo de configuracion de BD
const path = require('path');

const app = express(); // Inicio del servidor

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../front/build')));

// TODO: Main de rutas
const {
    damageDetailsRoutes,
    sectorDamageRoutes,
    severityCodeRoutes,
    damageCodeRoutes,
    damageTypeRoutes,
    damagesRoutes,
    usersRoutes,
    adminRoutes
} = require('./routes/Index');

app.use('/api/damage-details', damageDetailsRoutes);
app.use('/api/severity-code', severityCodeRoutes);
app.use('/api/sector-damage', sectorDamageRoutes);
app.use('/api/damage-code', damageCodeRoutes);
app.use('/api/damage-type', damageTypeRoutes);
app.use('/api/damages', damagesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/admin', adminRoutes);

app.listen(process.env.APP_PORT || 3000, () => {
    console.log('*** Server running ***');
    console.log(`http://localhost/${process.env.APP_PORT || 3000}`);
})
dbConnect();