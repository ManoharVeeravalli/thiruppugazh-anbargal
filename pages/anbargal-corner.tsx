import { Card, CardContent, Typography } from "@material-ui/core";
import { Heading, Metatags } from "../components/common";
import Layout from "../components/Layout";

export default function AnbargalCorner() {
    return (
        <Layout>
            <Metatags
                title="Abbargal Corner"
                description={``}
            />
            <Typography>
                <h4>Chitra Murthy - Books.pdf</h4>
            </Typography>
            <iframe id="chitra-murthy-books" src="./pdf/Chitra Murthy - Books.pdf" width="100%" height="600px"></iframe>
            <br />
            <Typography>
                <h4>Uma Balasubramanian Books</h4>
            </Typography>
            <img id="uma-balasubramanian-books" src="./images/anbargal-corner/uma-book.jpg" />
            <br />
            <div id="youtube-links">
                <Typography>
                    <h4>Youtube Links</h4>
                </Typography>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <iframe
                        className="bhajans"
                        src={`https://www.youtube.com/embed/playlist?list=PLoAWWQG2advarvEia1rEJoO_GJj2ruREZ&si=-ZEmcjrrQrxaabK3`}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="bhajans"
                        src={`https://www.youtube.com/embed/playlist?list=PLoAWWQG2advah1Xzu4VCXp5-Xkgvzpgi_`}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="bhajans"
                        src={`https://www.youtube.com/embed/playlist?list=PLoAWWQG2advaVKPb3BJsYw-Y9_rDT1GCK`}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >

                    </iframe>
                    <iframe
                        className="bhajans"
                        src={`https://www.youtube.com/embed/playlist?list=PL4MQY3mWzSNRmzHnFkhFdrK56hzfh_HwL&si=9zV5KUy8eZugUhgj`}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >

                    </iframe>
                    <iframe

                         className="bhajans"
                        src={`https://www.youtube.com/embed/playlist?list=PL4MQY3mWzSNTJA55lHEBl6f-2AK8hLOeV&si=ceVFsaHz9E0LBhRE`}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                    </iframe>

                        <iframe

                         className="bhajans"
                        src={`https://www.youtube.com/embed/playlist?list=PLn0nf_1Gv2f7N9epP_ci1sqhjNkbPd8a8&si=wEuzxwJttqotHCIt`}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                    </iframe>

                    <a href="https://drive.google.com/drive/folders/1DKrD4-0G52sddqojebfqi4Cb-62a-VxV?usp=sharing" target="_blank">
                        Padma Subramanian         Kandar anubhuti with meaning
                    </a>




                </div>


            </div>
        </Layout>
    );
}
