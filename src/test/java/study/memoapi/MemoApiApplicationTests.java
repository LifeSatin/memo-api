package study.memoapi;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import study.memoapi.domain.Memo;
import study.memoapi.domain.MemoDto;
import study.memoapi.domain.MemoService;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@Transactional
class MemoApiApplicationTests {

	@Autowired
	private MemoService memoService;

	@Test
	void 업데이트() {
		MemoDto memoDto = new MemoDto("title", "content");
		MemoDto memoDto1 = memoService.saveMemo(memoDto);
		Memo memo = memoService.findDtoById(memoDto1.getId());
		memoService.updateMemo(memoDto1.getId(), new MemoDto("title2", "content2"));
		assertThat(memo.getTitle()).isEqualTo("title2");
	}

}
