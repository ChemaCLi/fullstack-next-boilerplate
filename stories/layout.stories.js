import { Layout } from "../src/client/ui/components/shared"

export default {
    title: "Layout/MainLayout",
    component: Layout
}

export const BasicLayout = args => {
    return (
        <Layout>
            <div>Hola</div>
        </Layout>
    )
}

BasicLayout.args = {
    activeMenu: "default",
}