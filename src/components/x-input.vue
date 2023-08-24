<template>
  <div class="x-input-div" :class="{correct:props.correct, wrong:!props.correct}">
    <div class="label"><span>{{ label }}</span></div>
    <input class="x-input" v-model="ip.val" :type="type" @blur='fn'>
    <div class="feedback" v-if="!props.correct"><span>{{ props.feedback }}</span></div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

// eslint-disable-next-line no-undef
const props = defineProps({
  modelValue: String,
  label: String,
  type: String,
  correct: Boolean,
  feedback: String
})
// eslint-disable-next-line no-undef
const emits = defineEmits(['update:modelValue', 'blur'])

const fn = () => {
  emits('blur')
}

const ip = reactive({
  val: ''
})

watch(
  () => props.modelValue,
  (val, preVal) => {
    ip.val = val
  },
  {}
)

watch(
  () => ip.val,
  (val, preVal) => {
    emits('update:modelValue', val)
  },
  {}
)
</script>

<style scoped>
.x-input-div {
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(0,0,0,0);
  height: 52px;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: all 0.1s;
}

.correct {
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  font-size: 13px;
}

.correct:focus-within {
  border: 1px solid #0FA47F;
  color: #0FA47F;
  font-size: 15px;
}

.wrong {
  border: 1px solid #EA4335;
  color: #EA4335;
  font-size: 13px;
}

.wrong:focus-within {
  font-size: 15px;
}

input {
  width: 90%;
  height: 100%;
  background-color: rgba(0,0,0,0);
  border: none;
  margin: auto;
  color: inherit;
  font-family: 'Readex Pro',serif;
  font-size: 17px;
  font-weight: 100;
  letter-spacing: 0.25px;
}
input:focus-visible {
  outline: none;
}
.label {
  box-sizing: border-box;
  width: 95px;
  height: 13px;
  top: -6px;
  left: 10px;
  position: absolute;
  background-color: #1A1A1A;
  font-style: normal;
  font-weight: 300;
  line-height: 15px;
  padding-left: 15px;
  text-align: left;
}
.feedback {
  position: absolute;
  font-size: 12px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
