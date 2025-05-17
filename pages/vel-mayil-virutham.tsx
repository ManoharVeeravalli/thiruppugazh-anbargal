import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import { Heading, IST, Metatags } from "../components/common";

import Layout from "../components/Layout";
import { storage } from "../lib/firebase";

export default function VelMayilVirutham(props: any) {
  return (
    <Layout>
      <Metatags title="Vel Mayil Virutham" />
      <Heading text="Vel Mayil Virutham" />
      <Grid container spacing={1}>
        {props?.list.map(({ name, url }: { name: string; url: string }) => {
          return (
            <Grid item md={6} xs={12} key={name}>
              <Card>
                <CardHeader
                  title={name}
                ></CardHeader>
                <CardContent>
                  <audio controls className="w-100">
                    <source src={url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <br/>
      <Grid container spacing={1}>
        <table className="vel-mayil-table">
          <thead>
            <tr>
              <th>வேல்மயில் விருத்தங்கள்</th>
            </tr>
            <tr>
              <th>S.No.</th>
              <th>Ragam</th>
              <th>Song No.</th>
              <th>YouTube Link</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>நாட்டை</td><td>0</td><td><a target="_blank" href="https://www.youtube.com/watch?v=Nl7UzG2cxQc&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=1">மயில்விருத்தம் - காப்பு</a></td></tr>
            <tr><td>2</td><td>ஹம்ஸத்வனி</td><td>1a</td><td><a target="_blank" href="https://www.youtube.com/watch?v=-4EjERoFq3Y&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=2">வேல்விருத்தம் - 1a</a></td></tr>
            <tr><td>3</td><td>ஹம்ஸத்வனி</td><td>1b</td><td><a target="_blank" href="https://www.youtube.com/watch?v=uY85MNyeHmw&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=3">மயில்விருத்தம் - 1b</a></td></tr>
            <tr><td>4</td><td>மோகனம்</td><td>2a</td><td><a target="_blank" href="https://www.youtube.com/watch?v=JX2zgImEfNo&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=4">வேல்விருத்தம் - 2a</a></td></tr>
            <tr><td>5</td><td>மோகனம்</td><td>2b</td><td><a target="_blank" href="https://www.youtube.com/watch?v=AiL4eHab1Wo&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=5">மயில்விருத்தம் - 2b</a></td></tr>
            <tr><td>6</td><td>சாரங்கா</td><td>3a</td><td><a target="_blank" href="https://www.youtube.com/watch?v=YWVGPiUlZRQ&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=6">வேல்விருத்தம் - 3a</a></td></tr>
            <tr><td>7</td><td>சாரங்கா</td><td>3b</td><td><a target="_blank" href="https://www.youtube.com/watch?v=8D-1gprvy6Q&list=RDYWVGPiUlZRQ&index=10">மயில்விருத்தம் - 3b</a></td></tr>
            <tr><td>8</td><td>மணோலயம்</td><td>4a</td><td><a target="_blank" href="https://www.youtube.com/watch?v=EBZeJ7UQ9Yc&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=8">வேல்விருத்தம் - 4a</a></td></tr>
            <tr><td>9</td><td>மணோலயம்</td><td>4b</td><td><a target="_blank" href="https://www.youtube.com/watch?v=8uBhfKmafMQ&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=9">மயில்விருத்தம் - 4b</a></td></tr>
            <tr><td>10</td><td>பாகேஷ்ரீ</td><td>5a</td><td><a target="_blank" href="https://www.youtube.com/watch?v=T06LEV9jVio&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=10">வேல்விருத்தம் - 5a</a></td></tr>
            <tr><td>11</td><td>பாகேஷ்ரீ</td><td>5b</td><td><a target="_blank" href="https://www.youtube.com/watch?v=QUSCMeMSJxU&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=11">மயில்விருத்தம் - 5b</a></td></tr>
            <tr><td>12</td><td>சிந்துபைரவி</td><td>6a</td><td><a target="_blank" href="https://www.youtube.com/watch?v=MshRx7hWjow&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=12">வேல்விருத்தம் - 6a</a></td></tr>
            <tr><td>13</td><td>சிந்துபைரவி</td><td>6b</td><td><a target="_blank" href="https://www.youtube.com/watch?v=MbRwtef1atE&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=13">மயில்விருத்தம் - 6b</a></td></tr>
            <tr><td>14</td><td>பீம்பிளாஸ்</td><td>7a</td><td><a target="_blank" href="https://www.youtube.com/watch?v=RbaXsa9xaQ4&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=14">வேல்விருத்தம் - 7a</a></td></tr>
            <tr><td>15</td><td>பீம்பிளாஸ்</td><td>7b</td><td><a target="_blank" href="https://www.youtube.com/watch?v=WnwryH_r0LE&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=15">மயில்விருத்தம் - 7b</a></td></tr>
            <tr><td>16</td><td>மாண்ட்</td><td>8a</td><td><a target="_blank" href="https://www.youtube.com/watch?v=u15JNRU8Smw&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=16">வேல்விருத்தம் - 8a</a></td></tr>
            <tr><td>17</td><td>மாண்ட்</td><td>8b</td><td><a target="_blank" href="https://www.youtube.com/watch?v=GEPHOXzZqVQ&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=17">மயில்விருத்தம் - 8b</a></td></tr>
            <tr><td>18</td><td>துர்கா</td><td>9a</td><td><a target="_blank" href="https://www.youtube.com/watch?v=CPssboSpLPE&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=18">வேல்விருத்தம் - 9a</a></td></tr>
            <tr><td>19</td><td>துர்கா</td><td>9b</td><td><a target="_blank" href="https://www.youtube.com/watch?v=oWMiXqYArgU&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=19">மயில்விருத்தம் - 9b</a></td></tr>
            <tr><td>20</td><td>மத்யமாவதி</td><td>10a</td><td><a target="_blank" href="https://www.youtube.com/watch?v=DwRxBXcDnOc&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=20">வேல்விருத்தம் - 10a</a></td></tr>
            <tr><td>21</td><td>மத்யமாவதி</td><td>10b</td><td><a target="_blank" href="https://www.youtube.com/watch?v=3aTXsB47kWU&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=21">மயில்விருத்தம் - 10b</a></td></tr>
            <tr><td>22</td><td>மத்யமாவதி</td><td>11</td><td><a target="_blank" href="https://www.youtube.com/watch?v=uPRGNS-9A-g&list=PLb3Bd_b-r15b3clgiFe476WRbNZJvsBMp&index=22">மயில்விருத்தம் - 11</a></td></tr>
          </tbody>
        </table>

      </Grid>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = await storage.ref("vel-mayil-virutham").list();
  const list = await Promise.all(
    files.items.map(async (item) => {
      const url = await item.getDownloadURL();
      let name = item.name;
      name = name.split('.mp3')[0];
      let number = +name.split('.')[0];
      return { name: name, url, number };
    })
  );
  list.sort((a, b) => {
    return a.number - b.number;
  })
  return {
    props: {
      list,
    },
    revalidate: IST,
  };
}
