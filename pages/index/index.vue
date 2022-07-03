<template>
	<view class="index">
		<view class="top-bg-box">
			<image src="../../static/images/index.jpg" class="top-bg" mode="aspectFill"></image>
		</view>
		<view class="content-box">
			<view class="">
				<view class="title">
					学生信息
				</view>
				<view class="o">
					<view class="left sc">
						学校
					</view>
					<view class="select-box">
						<view class="input-box">
							<input @focus="schoolFocus" @blur="schoolBlur" @input="changeInput" v-model="school" type="text" class="input"
								value="" placeholder="请选择学校" placeholder-class="seplder" />
							<image src="../../static/images/sj-bottom.svg" class="sj-bottom-s" mode=""></image>
						</view>

						<view class="options-list" v-show="sc">
							<view class="options" v-for="(item,index) in schollList" :key="index" @tap.stop="changeSchool(item)">
								清华大学
							</view>
						</view>
					</view>
				</view>
				<view class="o">
					<view class="left sc">
						班级
					</view>
					<view class="select-box">
						<!-- <view class="input-box">
							<input disabled="" @blur="schoolBlurs" v-model="classNum" type="text" class="input" value=""
								placeholder="请选择班级" placeholder-class="seplder" @tap.top="changeFun" />
							<image src="../../static/images/sj-bottom.svg" class="sj-bottom-s" mode=""></image>
						</view> -->

						<!-- <view class="options-list" v-show="cl"> -->
							<!-- <view class="options" @tap.stop="changeClass('一年级（1）班')">
								一年级（1）班
							</view>
							<view class="options" @tap.stop="changeClass('一年级（2）班')">
								一年级（2）班
							</view> -->
							<picker mode="multiSelector" :range="ArrayList" @change="changeClass">
								<!-- <view>1</view> -->
							</picker>
						<!-- </view> -->
					</view>
				</view>
				<view class="o">
					<view class="left">
						姓名
					</view>
					<view class="right">
						<input type="text" value="" class="input" v-model="name" placeholder="请输入姓名"
							placeholder-class="plder" />
					</view>
				</view>
			</view>
			<view class="">
				<view class="title zd">
					征订信息
				</view>
				<view class="uni-list">
					<radio-group @change="radioChange">
						<label class="uni-list-cell" v-for="(item, index) in items" :key="item.value">
							<view>
								<radio :value="item.value" :checked="index === current" />
							</view>
							<view class="shop-box" @tap.stop="goToDetailsInfo">
								<view class="img-box">
									<image src="../../static/images/index.jpg" class="img" mode="aspectFill"></image>
								</view>
								<view class="right-box">
									<view class="le">
										<view class="title">
											晨光
										</view>
										<view class="sub_title">
											供港校园专供系列
										</view>
										<view class="actual-price">
											¥60011.19/份
										</view>
										<view class="origin-price">
											¥12110.07/份
										</view>
										<view class="service-charge">
											含配送服务费
										</view>
										<!-- <view class="price-box">
											<view class="actual-price">
												¥600.19/份
											</view>
											<view class="origin-price-box">
												<view class="origin-price">
													¥120.07/份
												</view>
												<view class="service-charge">
													含配送服务费
												</view>
											</view>
										</view> -->
										<view class="number">
											x10000
										</view>
									</view>
									<view class="sj-right-box">
										<image src="../../static/images/sj-right.svg" class="sj-right" mode=""></image>
									</view>
								</view>
							</view>
						</label>
					</radio-group>
				</view>
				<view class="">
					<!-- 配送方式 -->
					<view class="distribution-mode">
						配送方式：校内统一饮用，口味统一轮换
					</view>
					<view class="reminder">
						温馨提示：X月X日星期X起，每天第X节课期间在校饮用
					</view>
					<!-- 订单结算价格 -->
					<view class="settlement-box">
						<view class="price-item">
							<text>商品总额</text><text>¥10380.00</text>
						</view>
						<view class="price-item">
							<text>组合优惠</text><text>- ¥380.00</text>
						</view>
						<view class="price-item">
							<text>套餐优惠</text><text>- ¥380.00</text>
						</view>
						<view class="settlement-bottom">
							<text class="b-1">含配送服务费</text>
							<text class="b-2">实付款</text>
							<text class="b-3">¥10380.00</text>
						</view>
					</view>
				</view>
				<view class="">
					<view class="title mt">
						确认信息
					</view>
					<view class="o">
						<view class="left">
							手机号
						</view>
						<view class="right">
							<input type="text" value="" class="input" v-model="phone" placeholder="请输入手机号"
								placeholder-class="plder" />
						</view>
					</view>
					<view class="o">
						<view class="left">
							验证码
						</view>
						<view class="right-mt">
							<input type="text" value="" class="input" v-model="code" placeholder="请输入验证码"
								placeholder-class="plder" />
							<view class="code">
								点击获取
							</view>
						</view>
					</view>
					<view class="I-have-read">
						<image @tap="isHaveRead = !isHaveRead" v-if="!isHaveRead" src="../../static/images/check.svg"
							class="qb-checked" mode=""></image>
						<image @tap="isHaveRead = !isHaveRead" v-else src="../../static/images/checked.svg"
							class="qb-checked" mode=""></image>
						<view class="text">我已阅读 <text @tap.stop="protocol = true">《晨光学生奶征订通知》</text>与 <text
								@tap.stop="protocol = true">《晨光学生奶征订须知》</text>并同意征订</view>
					</view>
					<!-- 立即支付 -->
					<view class="Immediate-payment" :class="{'canPay':canPay}"
						@tap="$noMultipleClicks(ImmediatePayment)">
						立即支付
					</view>
				</view>
			</view>
		</view>
		<Protocol v-if="protocol" @change="changePup" />
		<PlaceOrder v-if="placeOrder" @change="changePlaceOrder" />
	</view>
</template>

<script>
	import {queryOpenStuSchool} from '@/api/index.js'
	import Protocol from '@/components/protocol-pop-up.vue'
	import PlaceOrder from '@/components/place-order.vue'
	import {
		NameVerify,
		PhoneVerify
	} from '@/utils/utils.js'
	export default {
		components: {
			Protocol,
			PlaceOrder,
		},
		data() {
			return {
				placeOrder: false,
				protocol: false,
				noClick: true,
				// 学生信息
				array: ['中国', '美国', '巴西', '日本'],
				ArrayList:[
					['4','5','6'],['1','2','3']
				],
				sc: false,
				cl: false,
				school: '', // 学校
				classNum: '', // 班级
				name: '', // 姓名
				phone: '', // 电话
				code: '', // 验证码

				// 商品信息
				items: [{
						value: 'USA',
						name: '美国'
					},
					{
						value: 'CHN',
						name: '中国',
						checked: 'true'
					},

				],
				current: 0,
				isHaveRead: false,
				schollList:[], // 学校列表
			}
		},
		onLoad() {

		},
		computed: {
			canPay() {
				let res = false
				if (this.school && this.classNum && this.name && this.phone && this.code && this.isHaveRead) {
					res = true
				}
				return res
			},
		},
		methods: {
			// 订单确认
			changePlaceOrder() {
				this.placeOrder = false
				uni.navigateTo({
					url: '/pages/my/pay'
				})
			},
			// 订奶须知
			changePup(e) {
				console.log(e)
				if (e === 'yes') {
					this.isHaveRead = true
				} else if (e === 'no') {
					this.isHaveRead = false
				}
				this.protocol = false
			},
			// 学校
			schoolFocus(e) {
				let value = e.detail.value
				console.log('学校', e.detail.value)
				this.school = value
				this.sc = true
				this.queryOpenStuSchoolFun()
			},
			// 学校查询
			async queryOpenStuSchoolFun(){
				if(!this.school) return
				const params = {
					schoolName:this.school 
				}
				const res = await queryOpenStuSchool(params)
				this.schollList = []
				console.log(res)
			},
			// 选择学校
			changeSchool(e) {
				this.school = e
				this.sc = false
				console.log(e)
				this.queryOpenStuSchoolFun()
			},
			// 输入学校查询
			changeInput(){
				this.queryOpenStuSchoolFun()
			},
			schoolBlur(e) {
				console.log('失去焦点', e)
				const _this = this;
				let timer = setTimeout(() => {
					_this.sc = false
					clearTimeout(timer)
				});
			},
			changeFun() {
				if (!this.school) {
					return uni.showToast({
						icon: 'none',
						title: '请选择学校'
					})
				}
				this.cl = true
			},
			changeClass(e) {
				this.classNum = e
				this.cl = false
			},
			// 商品
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.detail.value) {
						this.current = i;
						break;
					}
				}
				console.log('evt', this.current, evt.detail.value)
			},
			// 套餐详情
			goToDetailsInfo() {
				uni.navigateTo({
					url: '/pages/shopping-cart/package-details'
				})
			},
			// 立即支付
			ImmediatePayment() {
				if (!this.check()) return
				this.placeOrder = true
				console.log(111)
			},
			// 校验参数
			check() {
				if (!this.canPay) {
					return false
				}
				if (!NameVerify(this.name)) {
					uni.showToast({
						title: '请输入正确姓名',
						icon: 'none'
					});
					return false
				}
				if (!PhoneVerify(this.phone)) {

					uni.showToast({
						title: '请输入正确手机号',
						icon: 'none'
					});
					return false;
				}

				if (this.code.length !== 6) {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none'
					});
					return false;
				}
				return true
			},

		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss'
</style>
