-- create database comisaria;
-- use comisaria;
-- drop database comisaria;
-- Creación de la tabla Policías
CREATE TABLE Policias (
    RFC VARCHAR(10) PRIMARY KEY,
    Nombre VARCHAR(100),
    Categoria VARCHAR(50)
);

-- Creación de la tabla Relación Jefe-Subordinado
CREATE TABLE Jefe(
    RFC_Jefe VARCHAR(10),
    RFC_Subordinado VARCHAR(10),
    PRIMARY KEY (RFC_Jefe, RFC_Subordinado),
    FOREIGN KEY (RFC_Jefe) REFERENCES Policias(RFC),
    FOREIGN KEY (RFC_Subordinado) REFERENCES Policias(RFC)
);

-- Creación de la tabla Armas
CREATE TABLE Armas (
    Codigo VARCHAR(10) PRIMARY KEY,
    Clase VARCHAR(50),
    Nombre VARCHAR(100)
);

-- Creación de la tabla Habilidades Policiales
CREATE TABLE Habilidades(
    RFC_Policia VARCHAR(10),
    Codigo_Arma VARCHAR(10),
    Habilidad INT CHECK (Habilidad BETWEEN 1 AND 10),
    PRIMARY KEY (RFC_Policia, Codigo_Arma),
    FOREIGN KEY (RFC_Policia) REFERENCES Policias(RFC),
    FOREIGN KEY (Codigo_Arma) REFERENCES Armas(Codigo)
);

-- Creación de la tabla Delincuentes
CREATE TABLE Delincuentes (
    CURP VARCHAR(18) PRIMARY KEY,
    Nombre VARCHAR(100),
    Telefono VARCHAR(20),
    Direccion VARCHAR(255)
);

-- Creación de la tabla Encarcelamiento
CREATE TABLE Calabozo (
    Codigo_Calabozo VARCHAR(10) PRIMARY KEY,
    Ubicacion VARCHAR(255)
);

-- Creación de la tabla Relación Delincuente-Calabozo
CREATE TABLE Delincuente_Calabozo (
    CURP_Delincuente VARCHAR(18),
    Codigo_Calabozo VARCHAR(10),
    PRIMARY KEY (CURP_Delincuente, Codigo_Calabozo),
    FOREIGN KEY (CURP_Delincuente) REFERENCES Delincuentes(CURP),
    FOREIGN KEY (Codigo_Calabozo) REFERENCES Calabozo(Codigo_Calabozo)
);

-- Creación de la tabla Casos
CREATE TABLE Casos (
    Codigo_Caso VARCHAR(20) PRIMARY KEY,
    Juzgado VARCHAR(100)
);

-- Creación de la tabla Relación Caso-Delincuente
CREATE TABLE Caso_Delincuente (
    Codigo_Caso VARCHAR(20),
    CURP_Delincuente VARCHAR(18),
    Principal_Cargo VARCHAR(100),
    PRIMARY KEY (Codigo_Caso, CURP_Delincuente),
    FOREIGN KEY (Codigo_Caso) REFERENCES Casos(Codigo_Caso),
    FOREIGN KEY (CURP_Delincuente) REFERENCES Delincuentes(CURP)
);

-- Creación de la tabla Investigación Casos
CREATE TABLE Investigacion (
    RFC_Policia VARCHAR(10),
    Codigo_Caso VARCHAR(20),
    PRIMARY KEY (RFC_Policia, Codigo_Caso),
    FOREIGN KEY (RFC_Policia) REFERENCES Policias(RFC),
    FOREIGN KEY (Codigo_Caso) REFERENCES Casos(Codigo_Caso)
);
-- Creación de tabla users 
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `usuario` varchar(200) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `id_cargo` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL
)
-- Creacion de la tabla cargos
CREATE TABLE `cargo` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL
) 
INSERT INTO `cargo` (`id`, `descripcion`) VALUES
(1, 'Admin'),
(2, 'policia');