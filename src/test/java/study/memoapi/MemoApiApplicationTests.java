package study.memoapi;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import study.memoapi.domain.Memo;
import study.memoapi.domain.MemoDto;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@Transactional
class MemoApiApplicationTests {

	@Test
	void 업데이트() {
		MemoDto memoDto = new MemoDto("title", "content");
		Memo memo = new Memo(memoDto);
		memo.update(new MemoDto("title2", "content2"));
		assertThat(memo.getTitle()).isEqualTo("title2");
		assertThat(memo.getContent()).isEqualTo("content2");
	}

}
