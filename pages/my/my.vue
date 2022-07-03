<template>
	<view class="my">
		<view class="header">
			<view class="avatar-box">
				<image src="" class="avatar" mode=""></image>
			</view>
			<view class="right">
				<view class="user-name">
					用户名称
				</view>
				<view class="wechat-number">
					微信号：dahksdui
				</view>
			</view>
		</view>
		<view class="content">
			<view class="item" @tap="selectFun('我的订单')">
				<view class="left">
					<image src="../../static/images/my-order.svg" class="icon" mode=""></image>
					<text>我的订单</text>
				</view>
				<view class="right">
					<text>1</text>
					<image src="../../static/images/sj-right.svg" mode=""></image>
				</view>
			</view>
			<view class="item" @tap="selectFun('订奶须知')">
				<view class="left">
					<image src="../../static/images/order-milk-notice.svg" class="icon" mode=""></image>
					<text>订奶须知</text>
				</view>
				<view class="right">
					<image src="../../static/images/sj-right.svg" mode=""></image>
				</view>
			</view>
			<view class="item" @tap="selectFun('征订通知')">
				<view class="left">
					<image src="../../static/images/solicit-subscriptions.svg" class="icon" mode=""></image>
					<text>征订通知</text>
				</view>
				<view class="right">
					<image src="../../static/images/sj-right.svg" mode=""></image>
				</view>
			</view>
			<view class="item" @tap="selectFun('在线客服')">
				<view class="left">
					<image src="../../static/images/online-ervice.svg" class="icon" mode=""></image>
					<text>在线客服</text>
				</view>
				<view class="right">
					<image src="../../static/images/sj-right.svg" mode=""></image>
				</view>
			</view>
			<view class="item" @tap="selectFun('关于我们')">
				<view class="left">
					<image src="../../static/images/about.svg" class="icon" mode=""></image>
					<text>关于我们</text>
				</view>
				<view class="right">
					<image src="../../static/images/sj-right.svg" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				protocol: false,
			};
		},
		methods: {
			selectFun(e) {
				if (e === '我的订单') {
					uni.switchTab({
						url: '../shopping-cart/shopping-cart'
					})
				} else if (e === '订奶须知') {
					uni.navigateTo({
						url: '/pages/my/milk-notice'
					})
				} else {
					return uni.showToast({
						icon: 'none',
						title: '敬请期待'
					})
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.my {
		padding: 0 30rpx;

		.header {
			display: flex;
			align-items: center;
			padding: 23rpx 29rpx;
			background-color: #ffffff;
			border-radius: 32rpx;

			.avatar-box {
				width: 148rpx;
				height: 148rpx;
				border-radius: 50%;
				overflow: hidden;
				background-color: #C4C4C4;

				.avatar {
					width: 100%;
					height: 100%;
				}
			}

			.right {
				flex: 1;
				color: #211715;
				margin-left: 40rpx;

				.user-name {
					font-size: 44rpx;
					line-height: 60rpx;
				}

				.wechat-number {
					font-size: 28rpx;
				}
			}
		}

		.content {
			.item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 40rpx;
				background-color: #ffffff;
				margin-top: 28rpx;
				border-radius: 32rpx;

				.left {
					display: flex;
					align-items: center;

					.icon {
						width: 48rpx;
						height: 48rpx;
						margin-right: 36rpx;
					}

					text {
						color: #211715;
						font-size: 36rpx;
					}
				}

				.right {
					display: flex;
					align-items: center;

					text {
						background-color: #79B929;
						border-radius: 52rpx;
						padding: 4rpx 22rpx;
						color: #ffffff;
						font-size: 24rpx;
					}

					image {
						width: 30rpx;
						height: 30rpx;
						margin-left: 30rpx;
					}
				}
			}
		}
	}
</style>
