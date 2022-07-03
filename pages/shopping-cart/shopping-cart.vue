<template>
	<view class="shoping-cart">
		<view class="h">
			<view class="top-bg">
				<view class="search-box">
					<image src="../../static/images/search.svg" class="search-img" mode=""></image>
					<input type="text" placeholder="输入订单号或姓名进行搜索" placeholder-class="pl">
				</view>
			</view>
			<view class="tab-box">
				<view class="tab-item" v-for="(item, index) in tabList" :key="index"
					:class="{active:currentIndex === index}" @tap="currentIndexFun(index)">
					{{ item.label }}
				</view>
			</view>
		</view>

		<view class="shoping-list">
			<view class="shoping-item">
				<view class="header">
					<text class="order-number">订单号：202323787</text>
					<text class="order-time">2021-02-23 14:24</text>
				</view>
				<view class="shoping-img">
					<view class="img-box">
						<image src="../../static/images/index.jpg" class="img" mode="center"></image>
					</view>
					<view class="right">
						<view class="title-status-box">
							<text class="title">晨光</text>
							<text class="order-status">待支付</text>
						</view>
						<view class="sub_title">
							供港校园专供系列
						</view>
						<view class="price-box">
							¥6.19/份
							<text class="number">x100</text>
						</view>
					</view>
				</view>
				<view class="params-box">
					<view class="params-item">
						<text>商品总额</text>
						<text>¥1070.00</text>
					</view>
					<view class="params-item">
						<text>组合优惠</text>
						<text>- ¥380.00</text>
					</view>
					<view class="params-item">
						<text>套餐优惠</text>
						<text>- ¥30s0.00</text>
					</view>
				</view>
				<view class="actual-price-box">
					<text class="freight">含配送服务费</text>
					<text class="actual-price-text">实付款</text>
					<text class="actual-price"> ¥690.00</text>
				</view>
				<view class="operation-box">
					<view class="btn-box">
						<view class="delete">
							删除订单
						</view>
						<view class="submit" @tap="pay">
							立即支付
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
				tabList: [{
					value: 0,
					label: '全部'
				}, {
					value: 0,
					label: '待支付'
				}, {
					value: 0,
					label: '已支付'
				}, ],
			};
		},
		methods: {
			currentIndexFun(index) {
				this.currentIndex = index
			},
			pay() {
				uni.navigateTo({
					url: '/pages/my/pay'
				})
			},
		},
	}
</script>

<style lang="scss" scoped>

	.shoping-cart {
		background-color: #f8f8f8;
		// min-height: 100vh;
		overflow: hidden;

		.h {
			position: fixed;
			z-index: 1;
			width: 100%;

			.top-bg {
				width: 100%;
				// height: 300rpx;
				background-image: linear-gradient(#2D7AD8 0%, #74C5E8 100%);
				padding: 20rpx 0;

				.search-box {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 668rpx;
					height: 80rpx;
					border-radius: 66rpx;
					background-color: #FFFFFF;
					margin: 0 auto;

					.search-img {
						width: 40rpx;
						height: 40rpx;
						margin-right: 25rpx;
					}

					input {
						color: #0D4584;
						font-size: 30rpx;

						.pl {
							color: #0D4584;
							font-size: 26rpx;
						}
					}
				}
			}

			.tab-box {
				display: flex;
				align-items: center;
				justify-content: space-around;
				padding: 18rpx 0;
				background-color: #FFFFFF;

				.tab-item {
					padding: 8rpx 0;
					font-size: 32rpx;
					color: #999999;
					border-bottom: 4rpx solid transparent;

					&.active {
						color: #211715;
						border-bottom: 4rpx solid #42A4ED;
					}
				}
			}
		}

		.shoping-list {
			width: 668rpx;
			margin: 46rpx auto 0;
			padding-top: 220rpx;

			.shoping-item {
				width: 100%;
				padding: 28rpx 38rpx 36rpx;
				border-radius: 40rpx;
				background-color: #FFFFFF;
				box-sizing: border-box;
				margin-bottom: 40rpx;

				.header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-bottom: 20rpx;
					border-bottom: 1rpx solid #E5E5E5;

					.order-number,
					.order-time {
						color: #211715;
						font-size: 24rpx;
					}
				}

				.shoping-img {
					display: flex;
					align-items: center;
					padding: 28rpx 0 22rpx;
					border-bottom: 1rpx solid #E5E5E5;

					.img-box {
						margin-right: 20rpx;
						width: 150rpx;
						height: 150rpx;
						border-radius: 28rpx;
						overflow: hidden;

						.img {
							width: 100%;
							height: 100%;
						}
					}

					.right {
						flex: 1;
						height: 150rpx;

						.title-status-box {
							display: flex;
							align-items: center;
							justify-content: space-between;

							.title {
								font-size: 28rpx;
								color: #211715;
							}

							.order-status {
								font-size: 32rpx;
								color: #FF9900;
							}
						}

						.sub_title {
							color: #211715;
							font-size: 32rpx;
						}

						.price-box {
							display: flex;
							align-items: center;
							justify-content: space-between;
							font-size: 40rpx;
							color: #F54987;
							margin-top: 22rpx;

							.number {
								background-color: #42A4ED;
								border-radius: 50rpx;
								font-size: 24rpx;
								color: #FFFFFF;
								padding: 2rpx 12rpx;
							}
						}
					}

				}

				.params-box {
					padding-bottom: 20rpx;

					.params-item {
						margin-top: 20rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;
						color: #999999;
					}
				}

				.actual-price-box {
					display: flex;
					align-items: center;
					justify-content: flex-end;

					.freight {
						font-size: 24rpx;
						color: #211715;
						margin-right: 20rpx;
					}

					.actual-price-text,
					.actual-price {
						font-weight: bold;
						font-size: 42rpx;
						color: #211715;
						margin-right: 10rpx;
					}

					.actual-price {
						color: #F54987;
						margin-right: 0rpx;
					}
				}

				.operation-box {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					margin-top: 32rpx;

					.btn-box {
						display: flex;
						align-items: center;

						.delete,
						.submit {
							width: 192rpx;
							height: 68rpx;
							background-color: #C4C4C4;
							text-align: center;
							line-height: 68rpx;
							color: #FFFFFF;
							border-radius: 50rpx;
							margin-left: 22rpx;
							font-size: 28rpx;
						}

						.submit {
							background-color: #42A4ED;
						}
					}
				}
			}
		}
	}
</style>
