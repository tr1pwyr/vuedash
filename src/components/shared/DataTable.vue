<template>
	<section class="incident-table" id="incident-table">
		<div class="position-relative">
		
			<div class="table-responsive mx-5">
				<div class="d-md-flex text-center align-items-center justify-content-between pt-2 pb-3">
					<h6 class="link-symbol"> Latest Incidents</h6>
					<a class="link-symbol" href="/#what">Reset Log Files?</a>
				</div>
				<table class="table table-striped text-nowrap text-center text-lg-start">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Rating</th>
							<th>Change</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="link in data">
							<td> {{ link.rank }} </td>
							<td>
								<div class="link-name d-flex align-items-center">
									<div class="link-img">
										<img :src="link.img" :alt="link.name" class="incident-table-image">
									</div>
									<h6 class="link-url mb-0">
										<a :href="link.link" class="table-link text-decoration-none">
											{{ link.name }}
										</a>
										<span class="link-symbol">
											({{ link.symbol }})
										</span>
									</h6>
								</div>
							</td>
							<td>{{ link.rating }}</td>
							<td :class="{
								'green-text': link.change.startsWith('+'),
								'red-text': link.change.startsWith('-')
							}">
								{{ link.change }}
							</td>
							<td :class="{
								'green-text': link.action === 'Buy',
								'red-text': link.action !== 'Buy'
							}">
								{{ link.action }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			
		</div>
	</section>
</template>

<script setup>
import { data } from '../../js/leaderBoardData.js'
</script>

<style scoped>
.table-link{
	padding: 3px 6px;
}

a.table-link:hover {
  color: #fff;
  background-color: #2c96c3;
  border-radius: .3rem;
}

.dark a.table-link:hover {
  background-color: #6ab5db;
}

.incident-table-image{
	height: 32px;
	widows: 32px;
	margin-right: 5px;
}

.incident-table .table-responsive{
	background-color:#fff;
	border-radius: .5rem;
	padding: 1rem 1rem 0 0;
}

.dark .incident-table .table-responsive{
	background-color:#06060684;
	border-radius: .5rem;
	padding: 1rem 1rem 0 0;
}

.incident-table-image:hover{
	opacity: 1;
}

.link-symbol{
	padding-left: 5px;
	padding-right: 5px;
	font-size: .9rem;
	vertical-align: super;
	font-weight: 800;
}
h6{
	margin-left: .5rem;
}

.red-text{color: #623e88;}
.green-text{color: #1e033a;}
.dark .red-text{color:#b4483d;}
.dark .green-text{color: #6ab5db;}

</style>