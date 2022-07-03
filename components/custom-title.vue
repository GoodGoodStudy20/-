<template>
	<view class="page_box">
		<!-- 行内式直接变量小程序不支持，故需要写成动态的变量 -->
		<view class="my_tab_title" :style="{paddingTop:statusBarHeight}">
			{{ title || '晨光牛奶' }}
			<view class="menu_btn" :style="{ position: 'fixed',top:menuTop,left:menuRight}">
				<image v-show="isLeft" @tap="goToBack" src="../static/images/sj-left.svg" class="sj-left" mode=""></image>
			</view>
		</view>
		<!-- <view class="content_box" :style="{paddingTop:contentTop}"> -->
		<view class="content_box">
			<slot></slot>
		</view>

	</view>
</template>
<script>
	export default {
		props: ['title','isLeft'],
		data() {
			return {
				statusBarHeight: uni.getStorageSync('menuInfo').statusBarHeight, //状态栏的高度（可以设置为顶部导航条的padding-top）
				menuWidth: uni.getStorageSync('menuInfo').menuWidth,
				menuHeight: uni.getStorageSync('menuInfo').menuHeight,
				menuBorderRadius: uni.getStorageSync('menuInfo').menuBorderRadius,
				menuRight: uni.getStorageSync('menuInfo').menuRight,
				menuTop: uni.getStorageSync('menuInfo').menuTop,
				contentTop: uni.getStorageSync('menuInfo').contentTop,
			}
		},
		methods: {
			goToBack() {
				uni.navigateBack({
					delta: 1
				})
			},
		},
	};
</script>

<style lang="less" scope>
	.page_box {
		.my_tab_title {
			width: 100%;
			height: 44px; //这个是固定的44px（所有小程序顶部高度都是 = 44px + 手机系统状态栏高度）
			line-height: 44px;
			text-align: center;
			position: fixed;
			top: 0;
			z-index: inherit;
			font-size: 28rpx;
			color: #ffffff;

			.menu_btn {
				// background-color: #ffffff; //这个是小程序默认的标题栏背景色
				overflow: hidden;

				.sj-left {
					width: 40rpx;
					height: 40rpx;
				}

				// position: fixed;//行内式写了固定定位--目的是去掉下划页面一起滚动问题
				.arrowleft {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-160%, -50%) !important;
					-webkit-transform: translate(-160%, -50%) !important;
				}

				.text_box {
					width: 1rpx;
					height: 20px;
					// background-color: #ddd;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%) !important;
					-webkit-transform: translate(-50%, -50%) !important;
				}

				.home {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(60%, -50%) !important;
					-webkit-transform: translate(60%, -50%) !important;
				}
			}
		}

		.content_box {}
	}
</style>
