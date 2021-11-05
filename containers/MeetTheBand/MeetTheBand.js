import Text from "../../components/Text/Text";
import Member from "../../components/Member/Member";
import Style from "./MeetTheBand.module.scss";

import Bradley from "../../public/images/band_bradley.png";
import Justin from "../../public/images/band_justin.png";
import Lukas from "../../public/images/band_lukas.png";
import Matthias from "../../public/images/band_matthias.png";

const MeetTheBand = () => {

    return (
        <article className={Style.container}>
            <div className={Style.content__container}>
                <Text
                    subtitle={"don't worry, we are friendly"}
                    title={"meet the band"}
                />
                <div className={Style.members}>
                    <section className={Style.member_1}>
                        <Member 
                            image={Bradley}
                            name={"bradley remorie"}
                            instrument={"bass and lead-vocals"}
                        />
                    </section>
                    <section className={Style.member_2}>
                        <Member 
                            image={Lukas}
                            name={"lukas debeerst"}
                            instrument={"guitar"}
                        />
                    </section>
                    <section className={Style.member_3}>
                        <Member 
                            image={Justin}
                            name={"justin bruggeman"}
                            instrument={"drums"}
                        />
                    </section>
                    <section className={Style.member_4}>
                        <Member 
                            image={Matthias}
                            name={"matthias depreatere"}
                            instrument={"piano and guitar"}
                        />
                    </section>
                </div>
            </div>
        </article>
    )

}

export default MeetTheBand;