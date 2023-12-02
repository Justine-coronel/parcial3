create database Parc3
use Parc3


create table secciones (
id_sec int
constraint secciones_id_sec_PK primary key
)
---------------------------------------------------
create table Tabla(
titulo varchar(800),
parrafo varchar(2000),
imagen varchar(700),
id_sec int Constraint Header_id_sec_fk foreign key (id_sec) references secciones(id_sec)
)
insert into secciones
values('1'),
('2'),
('3'),
('4'),
('5'),
('6');


insert into Tabla(titulo, parrafo, imagen, id_sec)
						values ('Chainsaw Man', 'Chainsaw Man o tambien conocido como "El Conchesumare" es un manga y
                    posteriormente
                    una serie de anime que ha cautivado a una amplia audiencia en todo el mundo.
                    Escrito e ilustrado por Tatsuki Fujimoto, este manga combina elementos de acción, horror, comedia y
                    drama de
                    una manera sorprendentemente original.
                    La historia sigue a Denji, un joven cazador de demonios que se fusiona con una motosierra para
                    convertirse
                    en el temible "Chainsaw Man".
                    A medida que lucha contra horribles criaturas sobrenaturales, Denji se encuentra inmerso en un mundo
                    oscuro
                    y retorcido, lleno de conspiraciones y traiciones.', 'https://github.com/Justine-coronel/si/blob/main/P2/media/Kobeni.jpg?raw=true', 1),

						('Contexto de la serie', 'En la serie de Chainsaw Man la historia se desarrolla en un mundo donde los demonios
						nacen de los miedos humanos. Los demonios suelen ser peligrosos y malévolos, su poder es proporcional a
						la fuerza con que se incita su miedo correspondiente en la conciencia humana colectiva. Sin embargo, los
						 humanos pueden firmar contratos con ellos para usar sus poderes. Las personas que se especializan en la
						caza y el empleo de demonios se denominan cazadores de demonios. Los demonios se originan en el infierno
						y existen en un ciclo de vida interminable entre la Tierra y el Infierno: renacen en la Tierra cuando
						son asesinados en el Infierno, y viceversa.', 'https://github.com/Justine-coronel/si/blob/main/P2/media/context.jpg?raw=true', 2),

						('Sobre el anime', ' El 14 de diciembre de 2020, se anunció que el manga recibirá una adaptación a serie de anime
                        producida por el estudio MAPPA. Tuvo una presentación teatral en Jump Festa 21, como
                        parte de la serie de presentaciones teatrales Jump Studio que se llevaron a cabo en línea del 19
                        al 20 de diciembre de 2020. El primer tráiler de la serie de anime se mostró en el evento
                        «MAPPA Stage 2021 - 10th Anniversary», celebrado el 27 de junio de 2021.', 'https://github.com/Justine-coronel/si/blob/main/P2/media/anime2.png?raw=true', 3),

						(NULL,'El anime está dirigido por Ryū Nakayama (director) y Makoto Nakazono (director jefe de
                        episodios), con guiones de Hiroshi Seko, diseños de personajes de Kazutaka Sugiyama y diseños de
                        demonios de Kiyotaka Oshiyama. Tatsuya Yoshihara se desempeña como director de acción, Yūsuke
                        Takeda está dirigiendo el arte. Naomi Nakano es la artista clave del color y Yohei Miyahara está
                        diseñando las pantallas. La música está compuesta por Kensuke Ushio. La serie se
                        estrenará el 11 de octubre de 2022 en TV Tokyo y otros canales.', 'https://github.com/Justine-coronel/si/blob/main/P2/media/anime.png?raw=true', 3);

INSERT INTO TABLA (titulo, parrafo, imagen, id_sec)
	VALUES ('Los Cazadores de Demonios', '>Los Cazadores de Demonios de Seguridad Pública son una
                    organización de cazadores de demonios controlados y directamente financiados por el
                    gobierno en Japón, se les puede denominar como una cuerpo más dentro de la protección
                    civil típica en los gobiernos modernos.
                    Son enviados para neutralizar demonios en caso de una amenaza para el público y
                    tienen la tarea de resolver incidentes relacionados en una escala más pequeña.
                    Aunque el nivel de amenaza de los demonios que persiguen puede variar, generalmente son enviados
                    para
                    amenazas más grandes que las que trabajan en el sector privado, según Himeno.
                    Los Cazadores de Demonios de Seguridad Pública se dividen en varias divisiones. Una división notable
                    de
                    estos es liderada por Makima y emplea individuos que son atípicos
                    para la mayoría de la organización en general, como Denji, un humano que previamente
                    se fusionó con un demonio, y Power, una humana demonio.', 'https://github.com/Justine-coronel/si/blob/main/P2/media/Makima2.png?raw=true', 4),
		(NULL, NULL, 'https://github.com/Justine-coronel/si/blob/main/P2/media/Himeno.jpg?raw=true', 4),
		(NULL, NULL, 'https://github.com/Justine-coronel/si/blob/main/P2/media/Power2.jpg?raw=true', 4),
		(NULL, NULL, 'https://github.com/Justine-coronel/si/blob/main/P2/media/Denji.jpg?raw=true', 4);

insert into Tabla
values ('Demonio de la oscuridad', 'El Demonio de la Oscuridad se describe como un ser trascendente; uno de los demonios 
		que encarna un miedo primario(el miedo a la oscuridad) y nunca ha experimentado la muerte debido a que es tan poderoso.',
		'https://github.com/Justine-coronel/si/blob/main/P2/media/darknessDevil.png?raw=true',5),---------------

	   ('Demonio de las armas', 'El Demonio Pistola es un demonio muy poderoso que encarna el miedo a las armas de
		fuego. Fue introducido como uno de los demonios más poderosos del mundo, una catástrofe
		inminente a la que Denji debería derrotar llegado el momento.','https://github.com/Justine-coronel/si/blob/main/P2/media/gunDevil.png?raw=true',5),

		('Demonio bomba', 'Representa el temor de la humanidad hacia las bombas en general y que se
		manifiesta en su forma híbrida en la serie. Los poderes de esta entidad son considerables es capaz de hacer que
		su piel explote para herir y matar a todos los que se encuentren cerca','https://github.com/Justine-coronel/si/blob/main/P2/media/bombDevil.png?raw=true', 5),

		('Demonio de la guerra', 'El Demonio de la Guerra es un demonio que representa el miedo a la guerra y forma 
		parte de los Cuatro Jinetes. Posee una velocidad mejorada, una fuerza mejorada y una durabilidad mejorada junto con la creación de armas personalizadas.',
		'https://github.com/Justine-coronel/si/blob/main/P2/media/warDevil.png?raw=true', 5),

		('Contratos', 'En "Chainsaw Man," los contratos con demonios son acuerdos en los que los cazadores de demonios
                        se unen a demonios específicos mediante un intercambio de sangre. Estos contratos otorgan a
                        los
                        cazadores poderes y habilidades sobrenaturales, pero también vienen con limitaciones y
                        restricciones. Los cazadores deben alimentar a los demonios con sangre para mantener los
                        contratos y enfrentar consecuencias negativas si no cumplen. Estos contratos son un elemento
                        fundamental en la trama de la serie, que sigue a los cazadores de demonios, incluido el
                        protagonista, Denji, que se transforma en Chainsaw Man a través de un contrato con el "Devil
                        Chainsaw.', 'https://github.com/Justine-coronel/si/blob/main/P2/media/contratos.png?raw=true', 6);

					delete  tabla 
				insert into Tabla(titulo, parrafo, imagen, id_sec)
                        values('Home',null,null, 8),
                        ('Sobre CSM',null,null, 8),
                        ('Cazadores de Demonios',null,null, 8),
                        ('Demonios',null,null, 8),
                        ('Contratos',null,null, 8),
                        ('Mas',null,null, 8)