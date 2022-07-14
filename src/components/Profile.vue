<template>
  <QFrame title="User Profile" icon="account_circle" :color="$store.getters['app/mainColor']">
    <div v-for="(item,index) in items" :key="index">
      <q-input v-if="['text','textarea'].indexOf(item.type) !== -1" v-model="profileData[item.value]"
               :type="item.type" :label="item.title" :color="$store.getters['app/mainColor']"
               :disable="!item.isEditable">
        <template v-slot:prepend>
          <q-icon :name="item.icon"/>
        </template>
      </q-input>
      <Selector v-if="item.type === 'selector'" v-model="profileData[item.value]" :label="item.title"
                :icon="item.icon" :color="$store.getters['app/mainColor']" :disable="!item.isEditable"
                :name="item.selectorName"></Selector>
      <CitySelector v-if="item.type === 'city'" v-model="profileData[item.value]"
                    :color="$store.getters['app/mainColor']"></CitySelector>
    </div>

    <template slot="action">
      <q-btn class="full-width" unelevated label="Save" :color="$store.getters['app/mainColor']" @click="saveBtn"/>
    </template>
  </QFrame>
</template>

<script>
import Selector from "components/ui/Selector";
import {InputItem} from "src/js/InputItem";
import CitySelector from "components/ui/CitySelector";
import QFrame from "components/ui/QFrame";

export default {
  name: "Profile",
  components: {QFrame, CitySelector, Selector},
  data() {
    return {
      items: [
        new InputItem({
          title: "ID",
          value: "id",
          type: "text",
          icon: "verified",
          isEditable: false
        }),
        new InputItem({
          title: "First Name",
          value: "first_name",
          type: "text",
          icon: "badge"
        }),
        new InputItem({
          title: "Last Name",
          value: "last_name",
          type: "text",
          icon: "text_format"
        }),
        new InputItem({
          title: "Mobile",
          value: "mobile",
          type: "text",
          icon: "phone",
          isEditable: false
        }),
        new InputItem({
          title: "National Code",
          value: "national_code",
          type: "text",
          icon: "fingerprint",
          isEditable: false
        }),
        new InputItem({
          title: "Address",
          value: "address",
          type: "textarea",
          icon: "location_on"
        }),
        new InputItem({
          title: "School",
          value: "school",
          type: "text",
          icon: "school"
        }),
        new InputItem({
          title: "Major",
          value: "major_id",
          type: "selector",
          selectorName: "majors",
          icon: "work"
        }),
        new InputItem({
          title: "Grade",
          value: "grade_id",
          type: "selector",
          selectorName: "grades",
          icon: "grade"
        }),
        new InputItem({
          title: "Gender",
          value: "gender_id",
          type: "selector",
          selectorName: "genders",
          icon: "transgender"
        }),
        new InputItem({
          title: "City",
          value: "shahr_id",
          type: "city",
          icon: "maps_home_work"
        })
      ],
      profileData: {}
    }
  },
  mounted() {
    this.updateProfileData()
  },
  methods: {
    updateProfileData() {
      this.$q.loading.show()
      this.$store.dispatch("userService/getProfile", this.$store.getters["userService/userId"]).then((user) => {
        this.profileData = {}
        this.profileData = {
          "id": user["id"],
          "first_name": user["first_name"],
          "last_name": user["last_name"],
          "national_code": user["national_code"],
          "mobile": user["mobile"],
          "address": user["address"],
          "school": user["school"],
          "major_id": (user["major"] != null) ? user["major"]["id"] : null,
          "grade_id": (user["grade"] != null) ? user["grade"]["id"] : null,
          "gender_id": (user["gender"] != null) ? user["gender"]["id"] : null,
          "shahr_id": (user["shahr"] != null) ? user["shahr"]["id"] : null
        }
        this.updateUserFormData()
      }).catch(() => {
        this.$q.loading.hide()
      })
    },
    updateUserFormData() {
      this.$q.loading.show()
      this.$store.dispatch("userService/getUserFormData").then((userFormData) => {
        console.log(userFormData)
        this.$q.loading.hide()
      }).then(() => {
        this.$q.loading.hide()
      })
    },
    saveBtn() {
      console.log(this.profileData)
      this.$q.loading.show()
      this.$store.dispatch("userService/updateProfile", {
        id: this.profileData.id,
        data: this.profileData
      }).then((res) => {
        this.$q.loading.hide()
        this.$q.notify("User updated.")
        this.updateProfileData()
        console.log(res)
      }).catch((err) => {
        this.$q.loading.hide()
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
