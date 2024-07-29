import styled from 'styled-components';
import { Container } from '../../../components/container/Container';

type MapPropsType = {
  style?: string;
};

export function Map(props: MapPropsType) {
  return (
    <Container as={MapsWrapper}>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17841.150934844667!2d-122.46913043563896!3d37.76894987971115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z0KHQsNC9LdCk0YDQsNC90YbQuNGB0LrQviwg0JrQsNC70LjRhNC-0YDQvdC40Y8sINCh0KjQkA!5e0!3m2!1sru!2sru!4v1722273655467!5m2!1sru!2sru"
        width="100%"
        height="300"
        // style="border:0;"
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
    // <Container>
    //   <div>
    //     <a
    //       href="https://yandex.ru/maps/90/san-francisco/?utm_medium=mapframe&utm_source=maps"
    //       // style={props.style}
    //       // style="color:#eee;font-size:12px;position:absolute;top:0px;"
    //     ></a>
    //     <a
    //       href="https://yandex.ru/maps/geo/san_francisco/2240576882/?ll=-122.449475%2C37.765933&utm_medium=mapframe&utm_source=maps&z=14.58"
    //       // style="color:#eee;font-size:12px;position:absolute;top:14px;"
    //     ></a>
    //     <iframe
    //       src="https://yandex.ru/map-widget/v1/?ll=-122.449475%2C37.765933&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMjQwNTc2ODgyEklVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EsIENhbGlmb3JuaWEsIFNhbiBGcmFuY2lzY28gQ291bnR5LCBTYW4gRnJhbmNpc2NvIgoNzNX0whUxHhdC&utm_source=main_stripe_big&z=14.58"
    //       width="100%"
    //       height="300"
    //       // frameborder="1"
    //       // allowfullscreen="true"
    //       // style="position:relative;"
    //     ></iframe>
    //   </div>
    // </Container>
  );
}

const MapsWrapper = styled.div`
  margin-bottom: 70px;

  /* width: 100%; */
`;
