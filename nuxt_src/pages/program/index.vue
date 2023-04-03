<i18n lang="yaml">
## language=yaml
en:
  title: Program
  day1_header: Day 1
  day2_header: Day 2
  day2_title: What is an Open Mic Conference?
  to_candidates: To Proposals
  bookmark_only: BookMark Only
  day1_description: |
    Conference DAY in conference format. Doors open at 09:30, scheduled to end at 17:10 in JST.<br>
    Simultaneous interpretation by professionals will be provided via Zoom Webinar for all sessions.
  day2_description: |
    Conference DAY in conference format. Doors open at 09:30, scheduled to end at 17:20 in JST.<br>
    Simultaneous interpretation by professionals will be provided via Zoom Webinar for all sessions.
  timetable_url: https://docs.google.com/spreadsheets/d/11SNZqkdjidIgxA3DxE98ygH6Tj14eb7k-2dcd2hVGik/edit#gid=108016901
ja:
  title: プログラム
  day1_header: Day 1
  day2_header: Day 2
  day2_title: 飛び入りカンファレンスとは？
  to_candidates: 応募セッション一覧を表示する
  bookmark_only: ブックマークのみ表示
  day1_description: |
    カンファレンス形式 09時30分入場開始 17:10終了予定 (JST)。<br>
    全セッションについて、Zoom Webinarを利用した同時通訳がつきます。<br><br>
  day2_description: |
    カンファレンス形式 09時30分入場開始 17:20終了予定 (JST)。<br>
    全セッションについて、Zoom Webinarを利用した同時通訳がつきます。<br><br>
  timetable_url: https://docs.google.com/spreadsheets/d/11SNZqkdjidIgxA3DxE98ygH6Tj14eb7k-2dcd2hVGik/edit#gid=0
</i18n>

<template>
  <!-- TODO Table構造なので上手にComponentとして切り出したりしたいぞ！！！ -->
  <!-- 開始時刻が正となるため、例えば、13:00〜14:00のものと13:30〜14:00があったら、左の列が区切られるImage -->
  <!-- google io 2020 参考 https://events.google.com/io2020/schedule/?section=may-8 -->
  <div id="program">
    <div class="main js-subNav">
      <div class="main_inner">
        <h1 class="main_title">
          {{ $t("title") }}
        </h1>
        <ul class="main_index">
          <li class="main_item">
            <a href="#day1">{{ "4/15 " + $t("day1_header") }}</a>
          </li>
          <li class="main_item">
            <a href="#day2">{{ "4/16 " + $t("day2_header") }}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="btnArea programCtrl">
      <p class="content_link candidatesBtn">
        <nuxt-link :to="localePath('proposals')">
          {{ $t('to_candidates') }}
          <img v-lazy="require('~/assets/img/common/arrow-next-b.svg')" alt>
        </nuxt-link>
      </p>
      <a class="js-changeView favBtn" href="javascript:void(0) ">{{ $t('bookmark_only') }}</a>
    </div> -->
    <div id="day1" class="program">
      <h2 class="program_title">
        {{ "4/15 " + $t("day1_header") }}
      </h2>
      <p class="program_text">
        <span v-html="$t('day1_description')" />
      </p>
      <div class="schedule">
        <a :href="$t('timetable_url')" target="_blank" rel="noopener noreferrer" class="schedule_link">
          <img v-if="$i18n.locale == 'ja'" :src="require('~/assets/img/program/day1_ja.png')" alt="day1_timetable" class="day1_img" width="100%" />
          <img v-if="$i18n.locale != 'ja'" :src="require('~/assets/img/program/day1_en.png')" alt="day1_timetable" class="day1_img" width="100%" />
        </a>
        <!--        <div v-for="[startAt, sessions] in Object.entries(sessionsIn19)" :key="startAt">-->
        <!--          <div class="schedule_content">-->
        <!--            <p class="schedule_time">-->
        <!--              {{ getTimeStr(parseInt(startAt)) }}<br />-->
        <!--              <small>({{ getTimeZoneStr(parseInt(startAt)) }})</small>-->
        <!--            </p>-->
        <!--            <div class="schedule_events">-->
        <!--              <div v-for="session in sessions" :key="session.id" @click="openModal(session.proposal)">-->
        <!--                <schedule-->
        <!--                  :schedule="session"-->
        <!--                  :locale="$i18n.locale"-->
        <!--                  :style="{ 'pointer-events': isSessionWellDetailed(session.proposal) ? 'auto' : 'none' }"-->
        <!--                />-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>

    <div id="day2" class="program">
      <h2 class="program_title">
        {{ "4/16 " + $t("day2_header") }}
      </h2>
      <p class="program_text">
        <span v-html="$t('day2_description')" />
      </p>
      <!--      <p> -->
      <!--        <nuxt-link :to="localePath('unconference')"> -->
      <!--          {{ $t("day2_title") }} -->
      <!--        </nuxt-link> -->
      <!--      </p> -->
      <div class="schedule">
        <a :href="$t('timetable_url')" target="_blank" rel="noopener noreferrer" class="schedule_link">
          <img v-if="$i18n.locale == 'ja'" :src="require('~/assets/img/program/day2_ja.png')" alt="day2_timetable" class="day2_img" width="100%" />
          <img v-if="$i18n.locale != 'ja'" :src="require('~/assets/img/program/day2_en.png')" alt="day2_timetable" class="day2_img" width="100%" />
        </a>

        <!--        <div v-for="[startAt, sessions] in Object.entries(sessionsIn20)" :key="startAt">-->
        <!--          <div class="schedule_content">-->
        <!--            <p class="schedule_time">-->
        <!--              {{ getTimeStr(parseInt(startAt)) }}<br />-->
        <!--              <small>({{ getTimeZoneStr(parseInt(startAt)) }})</small>-->
        <!--            </p>-->
        <!--            <div class="schedule_events">-->
        <!--              <div v-for="session in sessions" :key="session.title || session.proposal.id" @click="openModal(session.proposal)">-->
        <!--                <schedule-->
        <!--                  :schedule="session"-->
        <!--                  :locale="$i18n.locale"-->
        <!--                  :style="{ 'pointer-events': isSessionWellDetailed(session.proposal) ? 'auto' : 'none' }"-->
        <!--                />-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>

    <transition name="fade">
      <div v-if="showModal" class="modal is_active fadeIn animated" tabindex="0" @click.self="closeModal()" @keyup.escape="closeModal()">
        <modal :program="selectProgram" @close="closeModal" />
      </div>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import { DateTime } from "luxon"
import Modal from "~/components/parts/SessionDetailModal.vue"
// import Schedule from "~/components/sections/program/schedule.vue"

export default {
  components: {
    Modal,
    // Schedule,
  },
  data() {
    return {
      selectProgram: null,
      showModal: false,
    }
  },
  computed: {
    ...mapGetters({
      filterByDateAndGroupByStartAt: "sessions/filterByDateAndGroupByStartAt",
    }),
    sessionsIn19() {
      return this.filterByDateAndGroupByStartAt(19)
    },
    sessionsIn20() {
      return this.filterByDateAndGroupByStartAt(20)
    },
  },
  methods: {
    getTimeStr(time) {
      return DateTime.fromSeconds(time).toFormat("HH:mm")
    },
    getTimeZoneStr(time) {
      return DateTime.fromSeconds(time).toFormat("ZZZZ")
    },
    getDateStr(time) {
      return DateTime.fromSeconds(time).toFormat("d")
    },
    getWholeDayStr(fromTime, toTime) {
      const from = this.getDateStr(fromTime)
      const to = this.getDateStr(toTime)
      if (from === to) {
        return "3/" + from + " "
      } else {
        return "3/" + from + " - " + to + " "
      }
    },
    getWholeDayStrOf(sessionTimeObj) {
      const sessionTimes = Object.keys(sessionTimeObj).map((v) => parseInt(v))
      return this.getWholeDayStr(sessionTimes[0], sessionTimes[sessionTimes.length - 1])
    },
    isSessionWellDetailed(session) {
      return session && session[this.$i18n.locale] && session[this.$i18n.locale].detail
    },
    openModal(item) {
      if (!item || !this.isSessionWellDetailed(item)) return
      this.selectProgram = item
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },
  head() {
    const $t = this.$t.bind(this)
    return {
      title: $t("title"),
      meta: [{ name: "og:title", content: `${$t("title")} | ScalaMatsuri 2023` }],
    }
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
