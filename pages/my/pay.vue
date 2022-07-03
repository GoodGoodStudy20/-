<template>
	<view class="pay">
		<view class="await-pay-price">
			待支付金额
		</view>
		<view class="price">
			¥ 280.00
		</view>
		<view class="pay-remaining-time-box">
			<view class="pay-remaining-time">
				支付剩余时间 14:45
			</view>
		</view>
		<view class="Payee-box">
			<view class="Payee-item">
				<text>收款方：</text>
				<text>晨光学生奶交费系统</text>
			</view>
			<view class="Payee-item">
				<text>商品：</text>
				<text>晨光学生奶套餐名称 1份</text>
			</view>
		</view>
		<view class="payment-method">
			<view class="left">
				<image src="../../static/images/wechat-payment.svg" mode=""></image>
				<text class="wechat-payment">微信支付</text>
			</view>
			<image class="right" src="../../static/images/wechat-paymented.svg" mode=""></image>
		</view>
		<view class="confirm-payment">
			确认支付
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="less" scoped>
	.pay {
		overflow: hidden;
		padding: 0 30rpx;
		box-sizing: border-box;

		.await-pay-price {
			margin-top: 86rpx;
			text-align: center;
			color: #211715;
			font-size: 24rpx;
		}

		.price {
			font-size: 50rpx;
			line-height: 90rpx;
			text-align: center;
			font-weight: bold;
		}

		.pay-remaining-time-box {
			display: flex;
			align-items: center;
			justify-content: center;
			padding-bottom: 60rpx;
			border-bottom: 1rpx solid #999999;

			.pay-remaining-time {
				display: inline-block;
				padding: 4rpx 16rpx;
				color: #211715;
				border: 1rpx solid #211715;
				border-radius: 50rpx;
				font-size: 24rpx;
			}
		}

		.Payee-box {
			padding: 12rpx 0 0;

			.Payee-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 28rpx;
				color: #211715;
				font-size: 28rpx;
			}
		}

		.payment-method {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 64rpx;
			border-radius: 32rpx;
			background-color: #ffffff;
			padding: 40rpx;

			.left {
				display: flex;
				align-items: center;

				image {
					width: 70rpx;
					height: 70rpx;
					border-radius: 12rpx;
					margin-right: 28rpx;
				}

				.wechat-payment {
					font-size: 36rpx;
					color: #211715;
				}
			}

			.right {
				width: 38rpx;
				height: 38rpx;
			}
		}

		.confirm-payment {
			position: fixed;
			left: 90rpx;
			bottom: 114rpx;
			width: 568rpx;
			height: 100rpx;
			background-color: #42A4ED;
			border-radius: 72rpx;
			text-align: center;
			line-height: 100rpx;
			font-size: 36rpx;
			color: #ffffff;
		}
	}
</style>
