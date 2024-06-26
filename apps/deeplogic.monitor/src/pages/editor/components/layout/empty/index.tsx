import {Empty, Typography} from "antd";
import {IllustrationNoContent} from "@douyinfe/semi-illustrations";
import css from './index.module.less';

function LayoutEmpty() {

    return (
        <Empty
            className={css.empty}
            image={<IllustrationNoContent/>}
            description={<Typography.Text type="secondary">暂无页面，请先新建页面</Typography.Text>}
        />
    );
}

export default LayoutEmpty;