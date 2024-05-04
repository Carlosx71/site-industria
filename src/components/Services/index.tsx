import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import imgManufacturing from 'assets/images/services/manufacturing.jpg';
import imgWelding from 'assets/images/services/welding.jpg';
import imgHandshaking from 'assets/images/services/handshaking.jpg';
import imgAssemblyAndDisassembly from 'assets/images/services/assemblyAndDisassembly.jpg';
import imgScouting from 'assets/images/services/scouting.jpg';
import imgRegulate from 'assets/images/services/regulate.jpg';
import imgTestField from 'assets/images/services/testField.jpg';
import imgRecovery from 'assets/images/services/recovery.jpg';
import imgTrainning from 'assets/images/services/trainning.jpg';
import imgBoilerRoom from 'assets/images/services/boilerRoom.jpg';
import imgMachining from 'assets/images/services/machining.jpg';
import imgIndustrialPainting from 'assets/images/services/industrialPainting.jpg';
import imgIndustrialAssembly from 'assets/images/services/industrialAssembly.jpg';
import imgIndustrialMaintenence from 'assets/images/services/industrialMaintenence.jpg';
import imgTechnicalAssistance from 'assets/images/services/technicalAssistance.jpg';

interface IServiceCard {
  title: string;
  description?: string;
  img: string;
  cardBoderColor?: string;
}

const ServicesCard = ({
  title,
  description,
  img,
  cardBoderColor = 'rgb(0, 51, 102)',
}: IServiceCard) => {
  return (
    <Grid item xs={12} sm={6} lg={6}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card
          sx={{
            display: 'flex',
            height: '200px',
            width: '100%',
            borderRadius: '10px 0px 0px 10px',
            borderLeft: `10px solid ${cardBoderColor}`,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto', border: 0 }}>
              <Typography
                component="div"
                variant="caption"
                color="rgb(0, 51, 102)"
                fontWeight="700"
              >
                {title}
              </Typography>
              {description && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  {description}
                </Typography>
              )}
            </CardContent>
          </Box>
        </Card>
        <CardMedia
          component="img"
          sx={{ width: 151, borderRadius: '0px 10px 10px 0px' }}
          image={img}
          alt="Live from space album cover"
        />
      </Box>
    </Grid>
  );
};

const Services = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const avatarCssRules: SxProps<Theme> = {
  //   height: '100px',
  //   width: '100px',
  //   bgcolor: 'rgb(0,51,102)',
  // };

  // const iconCssRules: SxProps<Theme> = {
  //   height: '50px',
  //   width: '50px',
  // };

  // const paperCssRules: SxProps<Theme> = {
  //   width: '100%',
  //   height: '100%',
  //   padding: '20px',
  // };

  // const paperElevation = 4;

  // const handleScroll = () => {
  //   const position = window.scrollY;

  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const dataRotateFilters: {
    title: string;
    description?: string;
    img: string;
  }[] = [
    {
      title: 'Fabricação',
      description:
        'Produção de equipamentos e componentes para sistemas de filtragem industrial.',
      img: imgManufacturing,
    },
    {
      title: 'Compra e Venda',
      description:
        'Transações comerciais envolvendo equipamentos e materiais relacionados à filtragem industrial.',
      img: imgHandshaking,
    },
    {
      title: 'Montagem e Desmontagem',
      description:
        'Instalação e remoção de sistemas de filtragem em ambientes industriais.',
      img: imgAssemblyAndDisassembly,
    },
    {
      title: 'Aferição',
      description:
        'Verificação da precisão e funcionamento dos equipamentos de filtragem.',
      img: imgScouting,
    },
    {
      title: 'Regulagens',
      description:
        'Ajustes e configurações para otimizar o desempenho dos sistemas de filtragem.',
      img: imgRegulate,
    },
    {
      title: 'Testes em Campo',
      description:
        'Avaliação prática da eficiência e adequação dos sistemas de filtragem em operação.',
      img: imgTestField,
    },
    {
      title: 'Recuperação de ART',
      description:
        'Gerenciamento e supervisão dos índices de perda de sistemas de filtragem industrial para garantir eficiência e conformidade regulatória.',
      img: imgRecovery,
    },
    {
      title: 'Treinamentos',
      description:
        'Capacitação técnica para operadores e técnicos envolvidos na manutenção e operação de sistemas de filtragem.',
      img: imgTrainning,
    },
  ];

  const dataEngineeringProject: {
    title: string;
    description?: string;
    img: string;
  }[] = [
    {
      title: 'Caldeiraria',
      description: 'Fabricação e reparo de estruturas metálicas complexas.',
      img: imgBoilerRoom,
    },
    {
      title: 'Usinagem',
      description:
        'Processo de produção de peças mecânicas com precisão, utilizando técnicas de corte, torneamento e fresamento.',
      img: imgMachining,
    },
    {
      title: 'Soldagem e jateamento',
      description:
        'União de materiais por diversos métodos, com acabamento por jateamento.',
      img: imgWelding,
    },
    {
      title: 'Pintura Industrial',
      description:
        'Aplicação de revestimentos protetores em estruturas metálicas.',
      img: imgIndustrialPainting,
    },
    {
      title: 'Montagem Industrial',
      description:
        'Instalação e integração de equipamentos em ambientes industriais.',
      img: imgIndustrialAssembly,
    },
    {
      title: 'Manutenção Industrial',
      description:
        'Preservação e reparo de equipamentos e instalações industriais',
      img: imgIndustrialMaintenence,
    },
    {
      title: 'Assistência Técnica',
      description:
        'Suporte especializado para resolução de problemas e otimização de processos.',
      img: imgTechnicalAssistance,
    },
    {
      title: 'Testes em Campo',
      description:
        'Avaliação prática de desempenho e funcionamento de sistemas industriais.',
      img: imgTestField,
    },
    {
      title: 'Treinamentos',
      description:
        'Capacitação técnica para profissionais em diversos aspectos da engenharia industrial.',
      img: imgTrainning,
    },
  ];

  return (
    <>
      <Grid container spacing={9} sx={{ marginBottom: '120px' }} id="services">
        <Grid item xs={12} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                component="div"
                textAlign="center"
                variant="h4"
                color="rgb(0, 51, 102)"
                fontWeight={700}
              >
                Projetos de Engenharia
              </Typography>
            </Grid>
            {dataEngineeringProject.map((item, index) => {
              return (
                <ServicesCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={item.img}
                />
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                component="div"
                textAlign="center"
                variant="h4"
                color="#27ABE2"
                fontWeight={700}
              >
                Filtros Sólidos
              </Typography>
            </Grid>
            {dataRotateFilters.map((item, index) => {
              return (
                <ServicesCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={item.img}
                  cardBoderColor="#27ABE2"
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
