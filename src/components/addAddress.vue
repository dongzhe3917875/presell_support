<template>
	<div>
		<div class="form-group province">
			<select @change="changeProvince($event)" v-model='chooseProvince'>
				<option v-for='(item, index) in arrCity' :value='index + ";" + item.name' v-text='item.name'></option>
			</select>
		</div>
		<div class="form-group city">
			<select @change="changeCity($event)" v-model='chooseCity'>
				<option v-for='(item, index) in arrCity[proIndex].sub' :value='index + ";" + item.name' v-text='item.name'></option>
			</select>
		</div>
		<div class="form-group county">
			<select @change="changeCounty($event)" v-model='chooseCounty'>
				<option v-if="!arrCity[proIndex].sub[cityIndex].sub" value='0;请选择'>请选择</option>
				<option v-if="arrCity[proIndex].sub[cityIndex].sub" v-for='(item, index) in arrCity[proIndex].sub[cityIndex].sub' :value='index + ";" + item.name' v-text='item.name'></option>
			</select>
		</div>
		<button @click='show'>show</button>
	</div>
</template>
<script>
import arrCity from '../api/city'
export default {
	data () {
		return {
			arrCity,
			proIndex: 0,
			cityIndex: 0,
			city: '',
			province: '',
			county: '',
			countyIndex: 0,
			chooseProvince: '',
			chooseCity: '',
			chooseCounty: ''
		}
	},
	props: ['addInfo'],
	mounted () {
		this.processData(this.addInfo.data)
	},
	methods: {
		processData (data) {
			this.chooseProvince = data.province
			this.chooseCity = data.region
			this.chooseCounty = '0;请选择'
			this.proIndex = data.province.split(';')[0]
			this.cityIndex = data.region.split(';')[0]
			this.countyIndex = 0
		},
		ProvinceToCity (target) {
			this.proIndex = target.split(';')[0]
			this.province = target.split(';')[1]
			this.cityIndex = 0
			this.countyIndex = 0
			this.chooseCity = this.cityIndex + ';' + this.arrCity[this.proIndex].sub[this.cityIndex].name
		},
		CityToCounty (target) {
			this.cityIndex = target.split(';')[0]
			this.city = target.split(';')[1]
			this.countyIndex = 0
			if (this.arrCity[this.proIndex].sub[this.cityIndex].sub) {
				this.chooseCounty = this.countyIndex + ';' + this.arrCity[this.proIndex].sub[this.cityIndex].sub[this.countyIndex].name
			} else {
				this.chooseCounty = '0;请选择'
			}
		},
		show () {
			console.log(this.chooseProvince)
			console.log(this.chooseCity)
			console.log(this.chooseCounty)
		},
		changeProvince (event) {
			this.chooseProvince = event.target.value
			this.ProvinceToCity(this.chooseProvince)
		},
		changeCity (event) {
			this.CityToCounty(event.target.value)
		},
		changeCounty (event) {
			this.countyIndex = event.target.value.split(';')[0]
			this.county = event.target.value.split(';')[1]
		}
	}
}
</script>