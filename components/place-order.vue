<template>
	<view class="pup" @touchmove.stop.prevent="moveHandle">
		<view class="content">
			<view class="title">
				信息确认
			</view>
			<view class="shop-box">
				<view class="shop-message">
					<view class="img-box">
						<image src="../static/images/index.jpg" class="img" mode=""></image>
					</view>
					<view class="right">
						<view class="name">
							晨光学生奶套餐名称晨光学生奶套餐名称
						</view>
						<view class="number-box">
							<text class="number">x 100 </text>
							<text class="price">实付款¥585</text>
						</view>
					</view>
				</view>
				<view class="ordering-information">
					订购信息
				</view>
				<view class="item-text">
					<text class="key">地址： </text>
					<text>广东省深圳市宝安区</text>
				</view>
				<view class="item-text">
					<text class="key">学校： </text>
					<text>黄埔中学</text>
				</view>
				<view class="item-text">
					<text class="key">班级： </text>
					<text>四 06班</text>
				</view>
				<view class="item-text">
					<text class="key">电话： </text>
					<text>15566778899</text>

				</view>
				<view class="distribution-mode">
					配送方式：校内统一饮用，口味统一轮换
				</view>
				<view class="reminder">
					温馨提示：X月X日星期X起，每天第X节课期间在校饮用
				</view>
				<view class="btn-box">
					<view class="yes" @tap.stop="changePup('yes')">
						确认
					</view>
				</view>
			</view>
		</view>
		<view class="close" @tap.stop="changePup('no')">
			<image src="../static/images/close.svg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "protocol-order",
		data() {
			return {

			};
		},
		methods: {
			changePup(e) {
				this.$emit('change', e)
			},
			moveHandle() {},
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
		flex-direction: column;

		.content {
			width: 670rpx;
			max-height: 1120px;
			background-color: #FFFFFF;
			border-radius: 60rpx;
			padding: 28rpx 30rpx 44rpx;
			box-sizing: border-box;

			.title {
				font-size: 44rpx;
				font-weight: bold;
				text-align: center;
				margin-bottom: 30rpx;
			}

			.shop-box {
				.shop-message {
					display: flex;
					align-items: center;
					background-color: #F2F2F2;
					border-radius: 28rpx;

					.img-box {
						width: 160rpx;
						height: 160rpx;
						border-radius: 28rpx;
						overflow: hidden;

						.img {
							width: 100%;
							height: 100%;
						}
					}

					.right {
						margin-left: 28rpx;

						.name {
							font-size: 32rpx;
							width: 360rpx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							-o-text-overflow: ellipsis;
							margin-bottom: 14rpx;
						}

						.number-box {
							font-size: 28rpx;
							color: #999999;

							.number {
								margin-right: 30rpx;
							}
						}
					}
				}

				.ordering-information {
					font-size: 36rpx;
					color: #211715;
					padding: 28rpx 0 22rpx;
					border-bottom: 1px solid #211715;
					margin-bottom: 12prx;
				}

				.item-text {
					color: #211715;
					font-size: 32rpx;
					padding: 12rpx 0;
				}

				.distribution-mode {
					color: #211715;
					font-size: 24rpx;
					margin: 16rpx 0;
				}

				.reminder {
					line-height: 40rpx;
					padding: 0 8rpx;
					text-align: center;
					line-height: 40rpx;
					background-color: #FFCBDE;
					border-radius: 12rpx;
					color: #F54987;
					font-size: 24rpx;
				}
			}

			.btn-box {
				display: flex;
				align-items: center;
				margin-top: 40rpx;

				.yes {
					flex: 1;
					height: 84rpx;
					text-align: center;
					line-height: 84rpx;
					color: #FFFFFF;
					font-size: 32rpx;
					border-radius: 72rpx;
					background-color: #42A4ED;
				}

			}
		}

		.close {
			width: 96rpx;
			height: 96rpx;
			margin-top: 82rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
