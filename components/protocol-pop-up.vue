<template>
	<view class="pup" @touchmove.stop.prevent="moveHandle">
		<view class="content">
			<view class="title">
				订奶须知
			</view>
			<p>1、征订时间结束过后，系统平台关闭，无法征订低温15.</p>
			<p>2、有乳糖不耐症、蛋白质过敏症、缺铁性资血、消化道溃病病、胆素炎、膜腺炎患者或饮用低温牛奶不适者不建议征订。征订前家长需了解孩子的体质。</p>
			<p>3、全市统一牛奶口味每天轮换，营养搭配，不单选择。</p>
			<p>4、低温牛奶需要在2-6°C环境下储存，长时间在常温环境下存放无法保质，学生须在分发到手后1小时内于规定场所饮用完牛奶，不能陆意放置在脏乱、阳光
				暴晒、潮湿、“四害"符不良环境，不能与他人交叉饮用，不能带回家饮用，开口后要尽快饮用，不浪费牛奶，低温牛奶全程冷链配送，饮用前应先观察奶盒，如遇破包、電包、胀包的牛奶不要饮用，需及时报告分奶专员进行更换。
			</p>
			<p>5、低温牛奶需要在2-6°C环境下储存长时间在常温环境下存放无法保质，学生</p>
			<view class="btn-box">
				<view class="no" @tap.stop="changePup('no')">
					不同意
				</view>
				<view class="yes" @tap.stop="changePup('yes')">
					同意
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "protocol-pop-up",
		data() {
			return {

			};
		},
		methods:{
			changePup(e){
				this.$emit('change',e)
			},
			moveHandle(){},
		}
	}
</script>

<style lang="less" scoped>
	.pup {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: #333333;
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;

		.content {
			width: 670rpx;
			max-height: 1120px;
			height: 90vh;
			overflow: scroll;
			background-color: #FFFFFF;
			border-radius: 60rpx;
			padding: 28rpx 46rpx 44rpx;
			margin: 0 40rpx;

			.title {
				font-size: 44rpx;
				font-weight: bold;
				text-align: center;
				margin-bottom: 30rpx;
			}

			.btn-box {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 40rpx;

				.no,
				.yes {
					width: 280rpx;
					height: 84rpx;
					text-align: center;
					line-height: 84rpx;
					color: #FFFFFF;
					font-size: 32rpx;
					border-radius: 72rpx;
				}

				.no {
					background-color: #C4C4C4;
				}

				.yes {
					background-color: #42A4ED;
				}
			}
		}
	}
</style>
