-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-07-2024 a las 10:46:38
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `comisaria`
--
CREATE DATABASE IF NOT EXISTS `comisaria` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `comisaria`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `armas`
--

DROP TABLE IF EXISTS `armas`;
CREATE TABLE `armas` (
  `Codigo` varchar(10) NOT NULL,
  `Clase` varchar(50) DEFAULT NULL,
  `Nombre` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `armas`
--

INSERT INTO `armas` (`Codigo`, `Clase`, `Nombre`) VALUES
('A1', 'Arma Corta', 'Glock 17'),
('A2', 'Arma Corta', 'Beretta 92FS'),
('A3', 'Arma Corta', 'Smith & Wesson Modelo 686'),
('B1', 'Arma Larga', 'Heckler & Koch G36'),
('B2', 'Arma Larga', 'Colt M4'),
('B3', 'Arma Larga', 'Remington 870'),
('C1', 'Arma No Letal', 'Taser X26'),
('C2', 'Arma No Letal', 'ASP Baton'),
('C3', 'Arma No Letal', 'Sabre Red'),
('D1', 'Arma Especial', 'FN Minimi'),
('D2', 'Arma Especial', ' Taser X26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calabozo`
--

DROP TABLE IF EXISTS `calabozo`;
CREATE TABLE `calabozo` (
  `Codigo_Calabozo` varchar(10) NOT NULL,
  `Ubicacion` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calabozo`
--

INSERT INTO `calabozo` (`Codigo_Calabozo`, `Ubicacion`) VALUES
('CAL001', 'Bloque A, Nivel 1'),
('CAL002', 'Bloque A, Nivel 2'),
('CAL003', 'Bloque B, Nivel 1'),
('CAL004', 'Bloque B, Nivel 2'),
('CAL005', 'Bloque C, Nivel 1'),
('CAL006', 'Bloque C, Nivel 2'),
('CAL007', 'Bloque D, Nivel 1'),
('CAL008', 'Bloque D, Nivel 2'),
('CAL009', 'Bloque E, Nivel 1'),
('CAL010', 'Bloque E, Nivel 2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

DROP TABLE IF EXISTS `cargo`;
CREATE TABLE `cargo` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cargo`
--

INSERT INTO `cargo` (`id`, `descripcion`) VALUES
(1, 'Admin'),
(2, 'policia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `casos`
--

DROP TABLE IF EXISTS `casos`;
CREATE TABLE `casos` (
  `Codigo_Caso` varchar(20) NOT NULL,
  `Juzgado` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `casos`
--

INSERT INTO `casos` (`Codigo_Caso`, `Juzgado`) VALUES
('CASE001', 'Juzgado Penal 1'),
('CASE002', 'Juzgado Penal 2'),
('CASE003', 'Juzgado Penal 3'),
('CASE004', 'Juzgado Penal 4'),
('CASE005', 'Juzgado Penal 5'),
('CASE006', 'Juzgado Penal 6'),
('CASE007', 'Juzgado Penal 7'),
('CASE008', 'Juzgado Penal 8'),
('CASE009', 'Juzgado Penal 9'),
('CASE010', 'Juzgado Penal 10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caso_delincuente`
--

DROP TABLE IF EXISTS `caso_delincuente`;
CREATE TABLE `caso_delincuente` (
  `Codigo_Caso` varchar(20) NOT NULL,
  `CURP_Delincuente` varchar(400) NOT NULL,
  `Principal_Cargo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriapoli`
--

DROP TABLE IF EXISTS `categoriapoli`;
CREATE TABLE `categoriapoli` (
  `id` int(11) NOT NULL,
  `categoria_poli` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoriapoli`
--

INSERT INTO `categoriapoli` (`id`, `categoria_poli`) VALUES
(1, 'Policia Municipal'),
(2, 'Policia Estatal'),
(3, 'Policia Ministerial'),
(4, 'Policia Vial'),
(5, 'Policia Turistica'),
(6, 'Policia Auxiliar ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `delincuentes`
--

DROP TABLE IF EXISTS `delincuentes`;
CREATE TABLE `delincuentes` (
  `CURP` varchar(400) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Telefono` varchar(20) DEFAULT NULL,
  `Direccion` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `delincuente_calabozo`
--

DROP TABLE IF EXISTS `delincuente_calabozo`;
CREATE TABLE `delincuente_calabozo` (
  `CURP_Delincuente` varchar(400) NOT NULL,
  `Codigo_Calabozo` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habilidades`
--

DROP TABLE IF EXISTS `habilidades`;
CREATE TABLE `habilidades` (
  `RFC_Policia` varchar(400) NOT NULL,
  `Codigo_Arma` varchar(10) NOT NULL,
  `Habilidad` int(11) DEFAULT NULL CHECK (`Habilidad` between 1 and 10)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `investigacion`
--

DROP TABLE IF EXISTS `investigacion`;
CREATE TABLE `investigacion` (
  `RFC_Policia` varchar(400) NOT NULL,
  `Codigo_Caso` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jefe`
--

DROP TABLE IF EXISTS `jefe`;
CREATE TABLE `jefe` (
  `RFC_Jefe` varchar(400) NOT NULL,
  `RFC_Subordinado` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `policias`
--

DROP TABLE IF EXISTS `policias`;
CREATE TABLE `policias` (
  `RFC` varchar(400) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Categoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `policias`
--

INSERT INTO `policias` (`RFC`, `Nombre`, `Categoria`) VALUES
('$2b$10$/O1.7MhnHchOKLFzMQpXfuXeTzLE4vMPHZps16YSP5LhjXI8Hprgq', 'Pilar Aguilar Luna', 1),
('$2b$10$nMWon4hQ54yhqPAF4KdJQuOTe0/JMBEC8hPoTdKJXZ4Iv43p7umY6', 'Lopez Vazquez Adrien', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `usuario` varchar(200) NOT NULL,
  `contrasena` varchar(400) NOT NULL,
  `id_cargo` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `usuario`, `contrasena`, `id_cargo`, `nombre`) VALUES
(4, 'alo2611', '$2b$10$77fkQpTzVygxIa.9Euyc/.LWlx3nn1encMT.2AjxdH81NN7Dmrq2W', 1, 'Alondra Abigail Garcia Tellez'),
(5, 'ameli0512', '$2b$10$tgChxaO/70cKswip551P0.OEWBx5JhrHdJ/EyKHSCy361fGH4SlAO', 2, 'Ameli Garcia Tellez'),
(6, 'paloma1205', '$2b$10$wgNCCwC6.i6ngPcv1I4DR.ibC0.WYkvEI4ldvXnYOuBfOLAYWghme', 2, 'Paloma Garcia Tellez'),
(7, 'America21', '$2b$10$W61NkIEHmS1omI5JjFOxH.UWJpPbyuWaE6ZT6pzV4gGlI2YN3IzF6', 2, 'America Mariel Roja Onofre'),
(8, 'axel2052', '$2b$10$XzyoU9DjMIzhm48blZRcX.FkVBddnBLR93uUCybEs0nnbo2QG6G2a', 2, 'Axel Abraham Manzanilla Vazquez'),
(10, 'pilar3425', '$2b$10$qfKmM6eChfm71PMHQNzcq.eRcbeCqmhWja2ITneI7fA7zpEq47zYW', 2, 'Pilar Elisama Luna Aguilar ');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `armas`
--
ALTER TABLE `armas`
  ADD PRIMARY KEY (`Codigo`);

--
-- Indices de la tabla `calabozo`
--
ALTER TABLE `calabozo`
  ADD PRIMARY KEY (`Codigo_Calabozo`);

--
-- Indices de la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `casos`
--
ALTER TABLE `casos`
  ADD PRIMARY KEY (`Codigo_Caso`);

--
-- Indices de la tabla `caso_delincuente`
--
ALTER TABLE `caso_delincuente`
  ADD PRIMARY KEY (`Codigo_Caso`,`CURP_Delincuente`),
  ADD KEY `CURP_Delincuente` (`CURP_Delincuente`);

--
-- Indices de la tabla `categoriapoli`
--
ALTER TABLE `categoriapoli`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `delincuentes`
--
ALTER TABLE `delincuentes`
  ADD PRIMARY KEY (`CURP`);

--
-- Indices de la tabla `delincuente_calabozo`
--
ALTER TABLE `delincuente_calabozo`
  ADD PRIMARY KEY (`CURP_Delincuente`,`Codigo_Calabozo`),
  ADD KEY `Codigo_Calabozo` (`Codigo_Calabozo`);

--
-- Indices de la tabla `habilidades`
--
ALTER TABLE `habilidades`
  ADD PRIMARY KEY (`RFC_Policia`,`Codigo_Arma`),
  ADD KEY `Codigo_Arma` (`Codigo_Arma`);

--
-- Indices de la tabla `investigacion`
--
ALTER TABLE `investigacion`
  ADD PRIMARY KEY (`RFC_Policia`,`Codigo_Caso`),
  ADD KEY `Codigo_Caso` (`Codigo_Caso`);

--
-- Indices de la tabla `jefe`
--
ALTER TABLE `jefe`
  ADD KEY `jefe_ibfk_1` (`RFC_Jefe`),
  ADD KEY `jefe_ibfk_2` (`RFC_Subordinado`);

--
-- Indices de la tabla `policias`
--
ALTER TABLE `policias`
  ADD PRIMARY KEY (`RFC`),
  ADD KEY `Categoria` (`Categoria`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cargo` (`id_cargo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cargo`
--
ALTER TABLE `cargo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `categoriapoli`
--
ALTER TABLE `categoriapoli`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `caso_delincuente`
--
ALTER TABLE `caso_delincuente`
  ADD CONSTRAINT `caso_delincuente_ibfk_1` FOREIGN KEY (`Codigo_Caso`) REFERENCES `casos` (`Codigo_Caso`),
  ADD CONSTRAINT `caso_delincuente_ibfk_2` FOREIGN KEY (`CURP_Delincuente`) REFERENCES `delincuentes` (`CURP`);

--
-- Filtros para la tabla `delincuente_calabozo`
--
ALTER TABLE `delincuente_calabozo`
  ADD CONSTRAINT `delincuente_calabozo_ibfk_1` FOREIGN KEY (`CURP_Delincuente`) REFERENCES `delincuentes` (`CURP`),
  ADD CONSTRAINT `delincuente_calabozo_ibfk_2` FOREIGN KEY (`Codigo_Calabozo`) REFERENCES `calabozo` (`Codigo_Calabozo`);

--
-- Filtros para la tabla `habilidades`
--
ALTER TABLE `habilidades`
  ADD CONSTRAINT `habilidades_ibfk_1` FOREIGN KEY (`RFC_Policia`) REFERENCES `policias` (`RFC`),
  ADD CONSTRAINT `habilidades_ibfk_2` FOREIGN KEY (`Codigo_Arma`) REFERENCES `armas` (`Codigo`);

--
-- Filtros para la tabla `investigacion`
--
ALTER TABLE `investigacion`
  ADD CONSTRAINT `investigacion_ibfk_1` FOREIGN KEY (`RFC_Policia`) REFERENCES `policias` (`RFC`),
  ADD CONSTRAINT `investigacion_ibfk_2` FOREIGN KEY (`Codigo_Caso`) REFERENCES `casos` (`Codigo_Caso`);

--
-- Filtros para la tabla `jefe`
--
ALTER TABLE `jefe`
  ADD CONSTRAINT `jefe_ibfk_1` FOREIGN KEY (`RFC_Jefe`) REFERENCES `policias` (`RFC`),
  ADD CONSTRAINT `jefe_ibfk_2` FOREIGN KEY (`RFC_Subordinado`) REFERENCES `policias` (`RFC`);

--
-- Filtros para la tabla `policias`
--
ALTER TABLE `policias`
  ADD CONSTRAINT `Categoria` FOREIGN KEY (`Categoria`) REFERENCES `categoriapoli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_cargo`) REFERENCES `cargo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
