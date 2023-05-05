<template>
    <nav>
        <!-- brand Name -->
        <div class="brand-name">
            <div>Outer media</div>
        </div>
        <!-- Menu List -->
        <ul id="sidebar" class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                    <img class="dark" src="@/assets/images/vectors/darkdashs.svg" alt="dash">
                    <img class="light" src="@/assets/images/vectors/dash.svg" alt="dash">
                    <span> Dashboard</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/liveview">
                    <img class="dark" src="@/assets/images/vectors/darklive.svg" alt="live">
                    <img class="light" src="@/assets/images/vectors/live.svg" alt="live">
                    <span> Live View</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/users">
                    <img class="dark" src="@/assets/images/vectors/darkusers.svg" alt="user">
                    <img class="light" src="@/assets/images/vectors/users.svg" alt="user">
                    <span> Users</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/mydisplays">
                    <img class="dark" src="@/assets/images/vectors/darkdisplays.svg" alt="display">
                    <img class="light" src="@/assets/images/vectors/displays.svg" alt="display">
                    <span>My Displays</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/packages">
                    <img class="dark" src="@/assets/images/vectors/darkpackage.svg" alt="packgae">
                    <img class="light" src="@/assets/images/vectors/package.svg" alt="packgae">
                    <span> Packages</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/spots">
                    <img class="dark" src="@/assets/images/vectors/darkspots.svg" alt="spots">
                    <img class="light" src="@/assets/images/vectors/spots.svg" alt="spots">
                    <span>Spots</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/crawlers">
                    <img class="dark" src="@/assets/images/vectors/darkVariant17.svg" alt="crawlers">
                    <img class="light" src="@/assets/images/vectors/Variant17.svg" alt="crawlers">
                    <span>Crawlers</span>
                </a>
            </li>
            <li class="nav-item">

                <a class="nav-link" href="/images">
                    <img class="dark" src="@/assets/images/vectors/darkimages.svg" alt="images">
                    <img class="light" src="@/assets/images/vectors/images.svg" alt="images">
                    <span>Images</span>
                </a>
            </li>
            <li class="nav-item">

                <a class="nav-link" href="#">
                    <img class="dark" src="@/assets/images/vectors/darkSchedule.svg" alt="schedule">
                    <img class="light" src="@/assets/images/vectors/file.svg" alt="schedule">
                    <span>Schedule</span>
                </a>
            </li>
            <li class="nav-item">

                <a class="nav-link" href="#">
                    <img class="dark" src="@/assets/images/vectors/darkPriorityschedule.svg" alt="piorityschdeule">
                    <img class="light" src="@/assets/images/vectors/Priorityschedule.svg" alt="piorityschdeule">
                    <span>Temporary Schedule</span>
                </a>
            </li>
            <li class="nav-item">

                <a class="nav-link" href="#">
                    <img class="dark" src="@/assets/images/vectors/darklogout.svg" alt="images">
                    <img class="light" src="@/assets/images/vectors/logoutsidebar.svg" alt="images">
                    <span>Logout</span>
                </a>
            </li>
        </ul>

    </nav>
</template>
<script>
export default {
    name: 'SideBar',
    methods: {
        sidebarEvent() {
            const navElements = document.querySelectorAll('.nav-link');
            navElements.forEach((el) => {
                el.addEventListener('click', () => {
                    // Remove active class from all other nav-link elements
                    navElements.forEach((navEl) => {
                        if (navEl !== el) {
                            navEl.classList.remove('active');
                        }
                    });
                    // Toggle active class on the clicked element
                    el.classList.toggle('active');
                    // Store the active link in localStorage
                    localStorage.setItem('activeLink', el.getAttribute('href'));
                });
            });
        },
        restoreActiveLink() {
            // Retrieve the active link from localStorage
            const activeLink = localStorage.getItem('activeLink');
            if (activeLink) {
                // Remove active class from the first link
                const firstLink = document.querySelector('.nav-link');
                if (firstLink) {
                    firstLink.classList.remove('active');
                }
                // Add active class to the link that matches the stored active link
                const link = document.querySelector(`a[href="${activeLink}"]`);
                if (link) {
                    link.classList.add('active');
                }
            }
        }
    },
    mounted() {
        this.sidebarEvent();
        this.restoreActiveLink();
    },
};



</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

nav {
    width: $nav-width;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: $color-brand-primary-blue;

}

.brand-name {
    @include textStyles(Arial, 700, 18px, 20px);
    color: $color-brand-primary;
    @extend %sidebar-padding-inline;
    height: 187px;

    div {
        transform: translateY($default-spacing * 8);
    }
}

#sidebar {

    li.nav-item {

        .nav-link.active {
            color: $nav-text-primary;
            background-color: $color-brand-primary;

            .dark {
                display: inline-block;
            }

            .light {
                display: none;
            }

        }


        a.nav-link {
            @include textStyles('Poppins', 500, 12px, 20px);
            color: $sidebar-text-primary;
            padding-block: 13px;
            height: 46px;
            @extend %sidebar-padding-inline;

            span {
                margin-left: $default-spacing * 2;
            }

            .dark {
                display: none;
            }

            .light {
                display: inline-block;
            }

            &:hover {

                background-color: darken($color-brand-primary, 35%);

                .dark {
                    display: nonw;
                }
            }
        }

    }
}
</style>