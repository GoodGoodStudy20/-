<template>
	<view class="package-details">
		<view class="bg-top">

		</view>
		<customTitle :title="title" :isLeft="true">
			<view class="shop-img-box">
				<image src="../../static/images/index.jpg" class="shop-img" mode="aspectFill"></image>
			</view>
			<view class="title">
				晨光
			</view>
			<view class="sub_title">
				供港校园专供奶系列
			</view>
			<view class="price-box">
				<text class="origin-price">¥ 18.4/份</text>
				<view class="right">
					<text class="price">¥ 8.4/份</text>
					<view class="service-charge">
						含配送服务费
					</view>
				</view>
			</view>
			<view class="list">
				<view class="shop-box" @tap.stop="goToDetailsInfo">
					<view class="img-box">
						<image src="../../static/images/index.jpg" class="img" mode="aspectFill"></image>
					</view>
					<view class="right-box">
						<view class="le">
							<view class="title-s">
								晨光
							</view>
							<view class="sub_title-s">
								早餐健康套餐
							</view>
							<view class="nx">
								<view class="number-s">
									鲜牛奶
								</view>
								<view class="number-s">
									鲜牛奶
								</view>
								<view class="number-s">
									鲜牛奶
								</view>
								<view class="number-s">
									鲜牛奶
								</view>
								<view class="number-s">
									鲜牛奶
								</view>
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
						</view>
						<view class="sj-right-box">
							<image src="../../static/images/sj-right.svg" class="sj-right" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<!-- 配送方式 -->
			<view class="distribution-mode">
				配送方式：校内统一饮用，口味统一轮换
			</view>
			<view class="reminder">
				温馨提示：X月X日星期X起，每天第X节课期间在校饮用
			</view>
		</customTitle>
	</view>
</template>

<script>
	import customTitle from '@/components/custom-title.vue'
	export default {
		components: {
			customTitle
		},
		data() {
			return {
				title: '套餐详情',
			};
		},
		methods: {
			// 套餐详情
			goToDetailsInfo() {
				uni.navigateTo({
					url: '/pages/shopping-cart/shopping-detailsInfo'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.package-details {
		overflow: hidden;

		.bg-top {
			width: 100%;
			height: 400rpx;
			background-image: linear-gradient(to bottom, #61BCE3 10%, #ffffff 100%);
		}

		.shop-img-box {
			width: 612rpx;
			height: 418rpx;
			margin: -200rpx auto 0;
			overflow: hidden;

			.shop-img {
				width: 100%;
			}
		}

		.title,
		.sub_title {
			display: block;
			margin: 18rpx 0;
			text-align: center;
			color: #211715;
			font-size: 24rpx;
			font-weight: bold;
		}

		.sub_title {
			font-size: 26rpx;
		}

		.price-box {
			display: flex;
			text-align: center;
			justify-content: center;

			.origin-price {
				font-size: 24rpx;
				margin: 10rpx 16rpx 0 0;
				text-decoration: line-through;
			}

			.right {
				color: #F54987;

				.price {
					font-size: 40rpx;
					font-weight: bold;

				}

				.service-charge {
					font-size: 24rpx;
				}
			}

		}

		.list {

			padding: 0 30rpx;

			.shop-box {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 20rpx;
				border-radius: 36rpx;
				box-shadow: 0px, 6px rgba(0, 0, 0, 0.12);
				background-color: $uni-bg-color;
				margin-top: 28rpx;

				.img-box {
					align-self: flex-start;
					display: block;
					margin-right: 20rpx;
					min-width: 220rpx;
					height: 220rpx;
					border-radius: 28rpx;
					overflow: hidden;
					background-color: #999999;

					.img {
						width: 100%;
						height: 100%;
					}
				}

				.right-box {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.le {
						align-self: flex-start;
						display: flex;
						flex-wrap: wrap;

						.title-s {
							width: 300rpx;
							font-size: 28rpx;
							color: #211715;
							word-break: keep-all;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}

						.sub_title-s {
							width: 300rpx;
							font-size: 32rpx;
							color: #211715;
							word-break: keep-all;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							font-weight: bold;
							margin-top: 4rpx;
						}

						.actual-price {
							font-size: 42rpx;
							font-weight: bold;
							color: #F54987;
							margin-top: 4rpx;
						}

						.origin-price {
							color: $uni-text-color-grey;
							text-decoration: line-through;
							font-size: 24rpx;
							margin-right: 10rpx;
							margin-top: 4rpx;
						}

						.service-charge {
							color: #F54987;
							font-size: 24rpx;
							margin-top: 4rpx;
						}

						.nx {
							display: flex;
							align-items: center;
							flex-wrap: wrap;
							width: 100%;

							.number-s {
								border-radius: 44rpx;
								padding: 2rpx 16rpx;
								background-color: #0098CF;
								font-size: 24rpx;
								color: #FFFFFF;
								margin: 6rpx 28rpx 6rpx 0;
							}
						}

					}

					.sj-right-box {
						min-width: 30rpx;
						height: 30rpx;

						.sj-right {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}

		.distribution-mode {
			font-size: 24rpx;
			color: #211715;
			text-align: center;
			margin-top: 24rpx;
		}

		.reminder {
			width: 592rpx;
			height: 40rpx;
			text-align: center;
			line-height: 40rpx;
			text-align: center;
			color: #F54987;
			margin: 18rpx auto 0;
			background-color: #F7E2EA;
			font-size: 24rpx;
			border-radius: 12rpx;
		}
	}
</style>
