<template>
  <mainView>
    <div class="main-container">
      <h3 class="login-status">You are logged In As <strong>Budda Live</strong></h3>
      <h6 class="title">My Active Displays (Within Last 5 Minutes)</h6>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Last Activity</th>
            <th scope="col">Package Played</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">7</td>
            <td>Game Room</td>
            <td>47 seconds ago</td>
            <td>Upcoming Actss</td>
            <td colspan="4" class="actions">
              <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

              <span class="edit">Edit</span>
              <span class="packages">Packages</span>
              <span class="play-view">
                <span class="view">View</span>
                <span>
                  <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg" alt="play-button" />
                </span>
              </span>
            </td>
          </tr>

          <tr>
            <td scope="row">7</td>
            <td>Game Room</td>
            <td>47 seconds ago</td>
            <td>Upcoming Actss</td>
            <td colspan="4" class="actions">
              <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

              <span class="edit">Edit</span>
              <span class="packages">Packages</span>
              <span class="play-view">
                <span class="view">View</span>
                <span>
                  <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg" alt="play-button" />
                </span>
              </span>
            </td>
          </tr>

          <tr>
            <td scope="row">7</td>
            <td>Game Room</td>
            <td>47 seconds ago</td>
            <td>Upcoming Actss</td>
            <td colspan="4" class="actions">
              <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

              <span class="edit">Edit</span>
              <span class="packages">Packages</span>
              <span class="play-view">
                <span class="view">View</span>
                <span>
                  <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg" alt="play-button" />
                </span>
              </span>
            </td>
          </tr>

          <tr>
            <td scope="row">7</td>
            <td>Game Room</td>
            <td>47 seconds ago</td>
            <td>Upcoming Actss</td>
            <td colspan="4" class="actions">
              <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

              <span class="edit">Edit</span>
              <span class="packages">Packages</span>
              <span class="play-view">
                <span class="view">View</span>
                <span>
                  <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg" alt="play-button" />
                </span>
              </span>
            </td>
          </tr>

          <tr>
            <td scope="row">7</td>
            <td>Game Room</td>
            <td>47 seconds ago</td>
            <td>Upcoming Actss</td>
            <td colspan="4" class="actions">
              <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

              <span class="edit">Edit</span>
              <span class="packages">Packages</span>
              <span class="play-view">
                <span class="view">View</span>
                <span>
                  <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg" alt="play-button" />
                </span>
              </span>
            </td>
          </tr>

          <tr>
            <td scope="row">7</td>
            <td>Game Room</td>
            <td>47 seconds ago</td>
            <td>Upcoming Actss</td>
            <td colspan="4" class="actions">
              <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

              <span class="edit">Edit</span>
              <span class="packages">Packages</span>
              <span class="play-view">
                <span class="view">View</span>
                <span>
                  <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg" alt="play-button" />
                </span>
              </span>
            </td>
          </tr>

          <tr>
            <td scope="row">7</td>
            <td>Game Room</td>
            <td>47 seconds ago</td>
            <td>Upcoming Actss</td>
            <td colspan="4" class="actions">
              <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

              <span class="edit">Edit</span>
              <span class="packages">Packages</span>
              <span class="play-view">
                <span class="view">View</span>
                <span>
                  <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg" alt="play-button" />
                </span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'
export default {
  name: 'Dashboard',
  components: {
    mainView
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/table.scss';

.login-status {
  margin-block: calculate-value(76px)  calculate-value(26px);
  @include textStyles('Poppins', 500, 24px, 36px);
  color: $nav-text-primary-dark;

  strong {
    color: $body-color-seconday-dim;
  }
}

.title {
  @include textStyles('Poppins', 400, 20px, 36px);
  color: $body-color-primary-light;
  border-bottom: $default-border-2 $body-border-color-2;
  width: fit-content;
  padding-bottom: calculate-value(11px);
}
</style>
