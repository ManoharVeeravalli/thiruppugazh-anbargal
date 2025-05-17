import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import { Heading, IST, Metatags } from "../components/common";

import Layout from "../components/Layout";
import { storage } from "../lib/firebase";

export default function Vaguppu(props: any) {
  return (
    <Layout>
      <Metatags title="Vaguppu" />
      <Heading text="Vaguppu" />
      <Grid container spacing={1}>
        {props?.list.map(({ name, url }: { name: string; url: string }) => {
          return (
            <Grid item md={6} xs={12} key={name}>
              <Card>
                <CardHeader title={name} />
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
      <Grid container>
        <table className="vel-mayil-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Youtube Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><a href="https://www.youtube.com/watch?v=irruXf_hZiw&list=PLb3Bd_b-r15aqWw3zcxXe2n-9o4HzIW4Z&index=1" target="_blank">சீரப்ாத வகுப்பு</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td><a href="https://www.youtube.com/watch?v=9A7Y6_obVAo&list=PLb3Bd_b-r15aqWw3zcxXe2n-9o4HzIW4Z&index=2" target="_blank">தததவந்திரசங்க வகுப்பு</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td><a href="https://www.youtube.com/watch?v=Par3YCkrBJ4&list=PLb3Bd_b-r15aqWw3zcxXe2n-9o4HzIW4Z&index=3" target="_blank">தவல் வகுப்பு</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td><a href="https://www.youtube.com/watch?v=MSQYTWAYElE&list=PLb3Bd_b-r15aqWw3zcxXe2n-9o4HzIW4Z&index=4" target="_blank">திருதவளைக்காரன் வகுப்பு</a></td>
            </tr>
            <tr>
              <td>5</td>
              <td><a href="https://www.youtube.com/watch?v=6NMF5Eugr6s&list=PLb3Bd_b-r15aqWw3zcxXe2n-9o4HzIW4Z&index=5" target="_blank">பபருதத்வசன வகுப்பு</a></td>
            </tr>
            <tr>
              <td>6</td>
              <td><a href="https://www.youtube.com/watch?v=fLUBK9lK-dI&list=PLb3Bd_b-r15aqWw3zcxXe2n-9o4HzIW4Z&index=6" target="_blank">தவடிசச்ிகாவலன் வகுப்பு</a></td>
            </tr>
            <tr>
              <td>7</td>
              <td><a href="https://www.youtube.com/watch?v=t14vyVT3Bi4&list=PLb3Bd_b-r15aqWw3zcxXe2n-9o4HzIW4Z&index=7" target="_blank">தசவகன் வகுப்பு</a></td>
            </tr>
            <tr>
              <td>8</td>
              <td><a href="https://www.youtube.com/watch?v=0oV7iIxYdiw&list=PLb3Bd_b-r15aqWw3zcxXe2n-9o4HzIW4Z&index=8" target="_blank">புய வகுப்பு</a></td>
            </tr>
            <tr>
              <td>9</td>
              <td><a href="https://www.youtube.com/watch?v=HuzrUBCcIRY&list=PLb3Bd_b-r15aqWw3zcxXe2n-9o4HzIW4Z&index=9" target="_blank">களைக்கணியல் வகுப்பு</a></td>
            </tr>
            <tr>
              <td>10</td>
              <td><a href="https://www.youtube.com/watch?v=5eOGvcQ-O-I&list=PLb3Bd_b-r15aqWw3zcxXe2n-9o4HzIW4Z&index=10" target="_blank">மயில் வகுப்பு</a></td>
            </tr>
            <tr>
              <td>11</td>
              <td><a href="https://www.youtube.com/watch?v=1yHLR8WqlQs&list=PLb3Bd_b-r15aqWw3zcxXe2n-9o4HzIW4Z&index=11" target="_blank">வீரவாை் வகுப்பு</a></td>
            </tr>
            <tr>
              <td>12</td>
              <td><a href="https://www.youtube.com/watch?v=jaw8WRwhxf4&list=PLb3Bd_b-r15aqWw3zcxXe2n-9o4HzIW4Z&index=12" target="_blank">திருப்பழநி வகுப்பு</a></td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = await storage.ref("vaguppu").list();
  const list = await Promise.all(
    files.items.map(async (item) => {
      const url = await item.getDownloadURL();
      let name = item.name;
      name = name.split('.mpeg')[0];
      let number = +name.split('.')[0];
      return { name, url, number };
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
