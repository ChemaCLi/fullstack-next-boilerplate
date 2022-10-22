import { ServiceLayerProvider } from "../../src/client/ui/contexts"
import { userService } from "../../src/client/src/user/application/user-service"
import { UsersManagementPageContent } from "../../src/client/ui/components/users"
import { restUserRepository } from "../../src/client/src/user/infrastructure/rest-user-repository"
import { Layout } from "../../src/client/ui/components/shared"

export default function Users() {
  return (
    <ServiceLayerProvider
      services={{
        userService: userService(restUserRepository())
      }}>
      <Layout>
        <UsersManagementPageContent />
      </Layout>
    </ServiceLayerProvider>
  )
}
